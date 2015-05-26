'use strict';

module.exports = function(grunt) {

    var CSS_DIR = 'public/css',
        SCSS_DIR = 'public/scss',
        IMG_DIR = 'public/img',
        JS_DIR = 'public/js';

    require('load-grunt-tasks')(grunt);

    // Project Configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options : {
                livereload: 7777
            },
            js: {
                files: [JS_DIR + '/**'],
                tasks: ['jshint:all'],
                options: {
                    livereload: true,
                },
            },
            html: {
                files: [JS_DIR + '/**/*.html'],
                tasks: ['html2js:main'],
                options: {
                    livereload: true,
                },
            },
            css: {
                files: [CSS_DIR + '/**'],
                options: {
                    livereload: true
                }
            },
            compass: {
                files: [SCSS_DIR + '/**'],
                tasks: ['compass:dev']
            },
            protractor: {
                files: ['lib/urlNgResource/**/*.js','test/e2e/**/*.js'],
                tasks: ['protractor:auto']
            }
        },

        jshint: {
            options: {
              jshintrc: '.jshintrc'
            },
            all: [
                'gruntfile.js',
                'public/js/{,**/}*.js',
                '!public/js/app/templates/{,**/}*.js',
                '!public/js/vendor/{,**/}*.js',
            ],
        },

        concurrent: {
            dev: {
                tasks: ['connect', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            },
            dist: [
                'compass:dist'
            ]
        },

        compass: {
            dist: {
                options: {
                    sassDir: SCSS_DIR,
                    cssDir: CSS_DIR,
                    imagesDir: IMG_DIR,
                    environment: 'production',
                    noLineComments: true
                }
            },
            dev: {
                options: {
                    sassDir: SCSS_DIR,
                    cssDir: CSS_DIR,
                    imagesDir: IMG_DIR
                }
            }
        },

        connect: {
            all: {
                options:{
                    port: 9000,
                    hostname: 'localhost',
                    keepalive: true
                }
            },
            webserver: {
                options: {
                    port: 8888,
                    keepalive: true
                }
            },
            devserver: {
                options: {
                    port: 8888
                }
            },
            testserver: {
                options: {
                    port: 9999
                }
            },
            coverage: {
                options: {
                    base: 'coverage/',
                    port: 5555,
                    keepalive: true
                }
            }
        },

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'dist/*'
                    ]
                }]
            }
        },
         
        copy: {
            main: {
                expand: true,
                cwd: 'public/',
                src: ['**', '!js/**', '!scss/**',],
                dest: 'dist/public/'
            },
            html: {
                cwd: '.',
                src: ['index.html'],
                dest: 'dist/'
            }
        },
 
        rev: {
            files: {
                src: ['dist/**/*.{js,css}']
            }
        },
 
        useminPrepare: {
            html: 'index.html'
        },
 
        usemin: {
            html: ['dist/index.html']
        },
 
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },

        html2js: {
            options: {
                base: '',
                quoteChar: '\'',
                useStrict: true
            },
            main: {
                src: [JS_DIR + '/**/*.html'],
                dest: JS_DIR + '/app/templates/templates.js'
            }
        },

        shell: {
            options: {
                stdout: true
            },
            selenium: {
                command: './selenium/start',
                options: {
                    stdout: false,
                    async: true
                }
            },
            protractorInstall: {
                command: 'node ./node_modules/protractor/bin/webdriver-manager update'
            },
            npmInstall: {
                command: 'npm install'
            }
        },

        protractor: {
            options: {
                keepAlive: true,
                configFile: './test/protractor.conf.js'
            },
            singlerun: {},
            auto: {
                keepAlive: true,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }
            }
        },

        open: {
            coverage: {
                path: 'http://localhost:5555'
            }
        },
        
        karma: {
            unit: {
                configFile: './test/karma-unit.conf.js',
                autoWatch: false,
                singleRun: true
            },
            unitAuto: {
                configFile: './test/karma-unit.conf.js',
                autoWatch: true,
                singleRun: false
            },
            unitCoverage: {
                configFile: './test/karma-unit.conf.js',
                autoWatch: false,
                singleRun: true,
                reporters: ['progress', 'coverage'],
                preprocessors: {
                    'public/js/app/**/*.js': ['coverage']
                },
                coverageReporter: {
                    type : 'html',
                    dir : 'coverage/'
                }
            }
        }

    });

    grunt.option('force', true);

    //single run tests
    grunt.registerTask('test', ['jshint','test:unit', 'test:e2e']);
    grunt.registerTask('test:unit', ['karma:unit']);
    grunt.registerTask('test:e2e', ['connect:testserver','protractor:singlerun']);

    //autotest and watch tests
    grunt.registerTask('autotest', ['karma:unitAuto']);
    grunt.registerTask('autotest:unit', ['karma:unitAuto']);
    grunt.registerTask('autotest:e2e', ['connect:testserver','shell:selenium','watch:protractor']);

    //coverage testing
    grunt.registerTask('test:coverage', ['karma:unitCoverage']);
    grunt.registerTask('coverage', ['karma:unitCoverage','open:coverage','connect:coverage']);

    //installation-related
    grunt.registerTask('install', ['update','shell:protractorInstall']);
    grunt.registerTask('update', ['shell:npmInstall', 'concat']);

    // Default task
    grunt.registerTask('default', [
        'jshint',
        'concurrent:dev',
        'compass'
    ]);

    // Build task
    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'copy',
        'useminPrepare',
        'concat',
        'uglify',
        'rev',
        'usemin'
    ]);
};

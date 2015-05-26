angular.module('templates-main', ['public/js/app/home/templates/body.html', 'public/js/app/templates/footer.html', 'public/js/app/templates/header.html', 'public/js/app/templates/navigation.html', 'public/js/app/users/templates/_list.html', 'public/js/app/users/templates/list.html', 'public/js/app/users/templates/user-modal.html']);

angular.module('public/js/app/home/templates/body.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('public/js/app/home/templates/body.html',
    '<div class="starter-template">\n' +
    '	<h1>Home Page</h1>\n' +
    '	<p class="lead">\n' +
    '		Boilerplate Angular.js v1.x application.\n' +
    '	</p>\n' +
    '</div>');
}]);

angular.module('public/js/app/templates/footer.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('public/js/app/templates/footer.html',
    '<div class="container">\n' +
    '  <p class="text-muted">\n' +
    '  	&copy; <a href="http://uroslates.com">Uros Lates</a>\n' +
    '  </p>\n' +
    '</div>');
}]);

angular.module('public/js/app/templates/header.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('public/js/app/templates/header.html',
    '');
}]);

angular.module('public/js/app/templates/navigation.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('public/js/app/templates/navigation.html',
    '<ul class="nav navbar-nav">\n' +
    '	<li ui-sref-active="active">\n' +
    '		<a ui-sref="base.home">Home</a>\n' +
    '	</li>\n' +
    '  <li ui-sref-active="active">\n' +
    '    <a ui-sref="base.users-list">Users</a>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '\n' +
    '<ul class="nav navbar-nav navbar-right">\n' +
    '	<li>\n' +
    '		<a href=""><i class="glyphicon glyphicon-log-in"></i> Sign in</a>\n' +
    '	</li>\n' +
    '</ul>');
}]);

angular.module('public/js/app/users/templates/_list.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('public/js/app/users/templates/_list.html',
    '<div class="container">\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12 col-sm-offset-3 col-sm-6">\n' +
    '            <div class="panel panel-default">\n' +
    '\n' +
    '                <div class="panel-heading c-list">\n' +
    '                    <span class="title">Users</span>\n' +
    '                    <ul class="pull-right c-controls">\n' +
    '                        <li><a href ng-click="userEditModal()" title="Add Contact"><i class="glyphicon glyphicon-plus"></i></a></li>\n' +
    '                        <li><a href class="hide-search" title="Toggle Search" ng-click="toggleSearch()"><i class="fa fa-ellipsis-v"></i></a></li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row" ng-if="searchOn">\n' +
    '                    <div class="col-xs-12">\n' +
    '                        <div class="c-search">\n' +
    '                            <input type="text" class="form-control" ng-model="search.placeOfBirth" placeholder="Search by Country">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <ul class="list-group" id="contact-list">\n' +
    '                    <li class="list-group-item" ng-repeat="user in items | filter:search">\n' +
    '                        <div class="col-xs-12 col-sm-3">\n' +
    '                            <a href ng-click="userEditModal(user)">\n' +
    '                                <img ng-if="user.avatar" ng-src="{{user.avatar}}" alt="Scott Stevens" class="img-responsive img-circle" />\n' +
    '                                <img ng-if="!user.avatar" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="Scott Stevens" class="img-responsive img-circle" />\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <div class="col-xs-12 col-sm-9">\n' +
    '                            <span class="name">{{user.firstName}} {{user.lastName}}</span><br/>\n' +
    '                            {{user.placeOfBirth}}\n' +
    '                            <a href ng-click="deleteUser(user.id)">\n' +
    '                              <span class="glyphicon glyphicon-trash text-muted c-info"></span>\n' +
    '                            </a>\n' +
    '                            <a href ng-click="userEditModal(user)">\n' +
    '                              <span class="fa fa-pencil text-muted c-info"></span>\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <div class="clearfix"></div>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

angular.module('public/js/app/users/templates/list.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('public/js/app/users/templates/list.html',
    '<ol class="breadcrumb">\n' +
    '  <li><a ui-sref="base.home"><i class="glyphicon glyphicon-home"></i></a></li>\n' +
    '  <li class="active">\n' +
    '    Template: <span class="badge">public/js/app/users/templates/list.html</span> |\n' +
    '    Route: <span class="badge">base.users-list</span>\n' +
    '  </li>\n' +
    '</ol>\n' +
    '\n' +
    '<div ng-include="\'public/js/app/users/templates/_list.html\'"></div>\n' +
    '');
}]);

angular.module('public/js/app/users/templates/user-modal.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('public/js/app/users/templates/user-modal.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">\n' +
    '      <span ng-if="user.id">Edit User</span>\n' +
    '      <span ng-if="!user.id">Add User</span>\n' +
    '    </h3>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '\n' +
    '    <div class="card card-container">\n' +
    '        <img ng-if="user.id" class="profile-img-card" ng-src="{{user.avatar}}" />\n' +
    '        <img ng-if="!user.id" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />\n' +
    '\n' +
    '        <form name="userForm" class="form-signin">\n' +
    '\n' +
    '          <div class="form-group"  ng-class="{ \'has-error\': userForm.firstName.$dirty && userForm.firstName.$invalid, \'has-warning\': userForm.firstName.$pristine, \'has-success\': userForm.firstName.$valid }">\n' +
    '            <input type="text" class="form-control" placeholder="First Name" ng-model="user.firstName" name="firstName" required autofocus>\n' +
    '            <span ng-if="userForm.firstName.$invalid && !userForm.firstName.$pristine" class="help-inline">This field is required</span>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="form-group" ng-class="{ \'has-error\': userForm.lastName.$dirty && userForm.lastName.$invalid, \'has-warning\': userForm.lastName.$pristine, \'has-success\': userForm.lastName.$valid }">\n' +
    '            <input type="text" class="form-control" placeholder="Last Name" ng-model="user.lastName" name="lastName" required>\n' +
    '            <span ng-if="userForm.lastName.$invalid && !userForm.lastName.$pristine" class="help-inline">This field is required</span>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="form-group" ng-class="{ \'has-error\':  userForm.email.$dirty && userForm.email.$invalid, \'has-warning\': userForm.email.$pristine, \'has-success\': userForm.lastName.$valid  }">\n' +
    '            <input type="email" class="form-control" placeholder="Email address" ng-model="user.email" name="email" required>\n' +
    '            <span ng-if="userForm.email.$invalid && !userForm.email.$pristine" class="help-inline">This field is required</span>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="form-group" ng-class="{ \'has-error\': userForm.placeOfBirth.$dirty && userForm.placeOfBirth.$invalid, \'has-warning\': userForm.placeOfBirth.$pristine, \'has-success\': userForm.placeOfBirth.$valid  }">\n' +
    '            <input type="text" class="form-control" placeholder="Place Of Birth" ng-model="user.placeOfBirth" required>\n' +
    '            <span ng-if="userForm.placeOfBirth.$invalid && !userForm.placeOfBirth.$pristine" class="help-inline">This field is required</span>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="form-group">\n' +
    '            <input type="text" class="form-control" placeholder="Phone" ng-model="user.phone">\n' +
    '            <span ng-if="userForm.phone.$invalid && !userForm.phone.$pristine" class="help-inline">This field is required</span>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="form-group">\n' +
    '            <input type="text" class="form-control" placeholder="Website" ng-model="user.website">\n' +
    '            <span ng-if="userForm.website.$invalid && !userForm.website.$pristine" class="help-inline">This field is required</span>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="form-group" ng-class="{ \'has-error\': userForm.username.$dirty && userForm.username.$invalid, \'has-warning\': userForm.username.$pristine, \'has-success\': userForm.username.$success }">\n' +
    '            <input type="text" class="form-control" placeholder="Username" ng-model="user.username" name="username" required>\n' +
    '            <span ng-if="userForm.username.$invalid && !userForm.username.$pristine" class="help-inline">This field is required</span>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="form-group">\n' +
    '            <input type="number" class="form-control" placeholder="Age" ng-model="user.age">\n' +
    '          </div>\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button class="btn btn-primary" ng-click="save(user)" ng-disabled="userForm.$invalid">Save</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Cancel</button>\n' +
    '</div>\n' +
    '');
}]);

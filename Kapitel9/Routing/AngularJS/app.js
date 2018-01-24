webapp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'partials/user-list.html',
                controller: 'UserListCtrl'
            }).
            when('/users/:userId', {
                templateUrl: 'partials/user-detail.html',
                controller: 'UserDetailCtrl'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);
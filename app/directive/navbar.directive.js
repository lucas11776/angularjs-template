app.directive('navbar', function () {
    return {
        restrict: 'EA',
        controller: function ($scope) {

            $scope.title = 'AngularJs Template';

            $scope.toggleNavbar = function () {
                var nav = $('#sidenav');
                if (nav.width() == 0) nav.width('250px');
                if (nav.width() != 0) nav.width('0');
            }

        },
        templateUrl: './app/template/navbar.html'
    }
});
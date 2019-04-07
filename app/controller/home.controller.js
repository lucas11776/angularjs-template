app.controller('homeController', function ($scope, data) {

    $scope.title = 'Dark Gray Html Template For Portfolio';

    // initial controller
    init();

    function init(){
        $scope.asset = data.count;
    }

});
/// <reference path="../jquery/jquery-3.3.1.min.js" />

//open navbar
$scope.open = function () {
    if ($('#sidenav').width() == 0) {
        $('#sidenav').width('250px');
    } else {
        $('#sidenav').width('0');
    }
};

//close nabar
$scope.close = function () {
    $('#sidenav').width('0');
};


(function () {
    // toggle navbar
    $('.navbar-btn').click(function () {
        if($('#sidenav').width() == 0){

        }else{}
    });
}());
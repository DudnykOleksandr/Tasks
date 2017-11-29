angular.module("tasks", []).controller("indexController", function ($scope) {

    var vm = $scope;
    
    this.initializeController = function () {
        vm.title = "Index Page";
    }
});
angular.module("tasks", []).controller("indexController", function ($scope) {

    var self = $scope;
    self.tasks = [];

    this.initializeController = function () {
        self.title = "Index Page";

        self.tasks.push("Test task");
    }

    self.addTask = function (newTask) {
        self.tasks.push(newTask);
    }

    self.removeTask = function (task) {
        var taskIndex = self.tasks.indexOf(task);
        if (taskIndex!= -1)
        {
            self.tasks.splice(taskIndex, 1)
        }
    }
});
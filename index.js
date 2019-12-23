// "use strict";
import angular from "angular";

const app = angular.module("app", []);
app.controller("MyController", function($scope){
    $scope.title = "Angular Controller is here";
})

export default app;
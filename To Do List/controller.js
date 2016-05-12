angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService){
	if (localStorageService.get("ToDoList") ) {
		$scope.todo=localStorageService.get("ToDoList");
	} else {
		$scope.todo=[];
	}
		/*
		{
			descripcion: Terminar curso
			fecha: 03-05-2016 0200pm
		}
		*/
		/*	$scope.$watch(function() {
				return $scope.newActividad;
			}, function(newValue, oldValue){
				console.log(newValue);
				console.log(oldValue);
			});
*/	
$scope.$watchCollection('todo', function(newValue, oldValue){
	localStorageService.set("ToDoList", $scope.todo);
});

$scope.addActividad= function(){
	$scope.todo.push($scope.newActividad);
	$scope.newActividad={};
	
}
$scope.cleanActividad= function(){
	$scope.todo=[];
	
}
});


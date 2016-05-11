var app = angular.module('MyFirstApp', []);
app.controller('FirstController', function($scope){
	$scope.nombre = "Milton";
	$scope.nuevoComentario = {};

	$scope.comentarios =  [
	{
		comentario: "Buen tutorial",
		username: "mhotavo"
	},
	{
		comentario: "Mal tutorial",
		username: "Admin"			
	}
	]
	$scope.agregarComentario= function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario={};
	}
});

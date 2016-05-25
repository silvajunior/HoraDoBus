/*var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
*/


var myApp = angular.module('plunker', []);


    myApp.controller('CarrinhoController', ['$scope','$http', function($scope, $http){
        $scope.title = 'Lista de Produtos';


        $http.get('produtos.json').success(function(data){

            $scope.lista = data;

        });

    }]);
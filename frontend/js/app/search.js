appModule.controller('SearchController', ['$resource', '$scope', '$rootScope', function($resource, $scope, $rootScope){
    $scope.bla = 'sdfsdf';
    $scope.search = function(search){
        $scope.results = $resource("http://askgolos.ru/search?q=" + search).get()
    }
}]);
appModule.controller('SearchController', ['$resource', '$scope', '$rootScope', function($resource, $scope){
    $scope.search = function(search){
        $scope.results = $resource("http://askgolos.ru/search?q=" + search).get()
    };
}]);
appModule.controller('SearchController', ['$http', '$scope', '$rootScope', function($http, $scope, $rootScope){
    $scope.search = function(search){
        console.log(encodeURIComponent(search));
        $http.get("http://askgolos.ru/search?q=" + encodeURIComponent(search), function(data){
            $scope.results = data;
        })
    };
    $scope.types = {
        post: " AND depth:0"
    }
}]);
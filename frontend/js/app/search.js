appModule.controller('SearchController', ['$resource', '$scope', '$rootScope', function($resource, $scope, $rootScope){
    $scope.t = 'def';
    // console.log($scope.t);
    $scope.search = function(search){
        // console.log($scope.types[$scope.t].replace('^', search));
        search = search || '*';
        if (search && $scope.t === 'def'){
            $scope.t = 'post'
        }
        search = $scope.types[$scope.t].replace('^', search);
        $scope.results = $resource("http://askgolos.ru/search?indent=on&wt=json&q=" + encodeURIComponent(search), function(){}).get();
        // console.log($scope.t);
        // $http.get("http://195.2.252.217:9999/solr/askgolos/select?wt=json&q=" + encodeURIComponent(search), function(e, data){
        //     $scope.results = data;
        // })
    };
    $scope.set_type = function(t){
        $scope.t = t;
        $scope.search($scope.search_text);
        // console.log($scope.t);

        // $scope.search_text
    };

    $scope.types = {
        def: "depth:0",
        post: "^ AND depth:0",
        account: "^ AND ns:steemdb.account",
        comments: "^ AND depth>0",
        archive: "^ AND depth:0 AND mode:archived"
        // byvote: ""
    }
}]);
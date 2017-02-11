angular.module("products").controller("MainController",["$scope",function($scope){
    
    
    $scope.cart={products:[]};
    
    $scope.getAddedProducts=function(){
        
        angular.forEach($scope.cart.products,function(product){
            console.log(JSON.stringify(product));
        })
        
        
    }
}])
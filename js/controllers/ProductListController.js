angular.module("products").controller("ProductListController",["$scope","ProductsService",function($scope,productsService){
        
        var page=0, productsPerPage=3;
        
        var init=function(){
            
            
            productsService.getSelectedProducts(page,productsPerPage,function(result){
                 $scope.productsShown=result
            });
            
        };
        init();
        
        $scope.addToCart=function(product){
            
            $scope.cart.products.push(product)
            
        };
    
        $scope.quickView=function(product){
            console.log(JSON.stringify(product))
        }
        
        $scope.nextPage=function(){
            if(page+productsPerPage<productsService.getCount()){
                page=page+productsPerPage;
            
              productsService.getSelectedProducts(page,productsPerPage,function(result){
                 $scope.productsShown=result
            });
            }
            
            
        };
    
        $scope.previousPage=function(){
            if(page-productsPerPage>=0){
                page=page-productsPerPage;
            
             productsService.getSelectedProducts(page,productsPerPage,function(result){
                 $scope.productsShown=result
            });
            }
            
            
        };
    }])
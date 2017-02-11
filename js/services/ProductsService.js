angular.module("products").factory("ProductsService",["$http",function($http){
    
    var productsLists=[],totalProductsCount=0;
    
    return{
        
        getAllProducts:function(page,callback){
            $http.get("../json/products.json").then(function(result){
                
                productsLists=result;     
                return productsLists;
                
        
            });
        },
        getCount:function(){
            
            return totalProductsCount;
        },
        getSelectedProducts:function(page,productsPerPage,callback){
            $http.get("./json/products.json").then(function(result){
        
                totalProductsCount=result.data.length;
                
                productsLists=result.data;
                return callback(productsLists.slice(page,page+productsPerPage));
                
        
            });
        }
        
        
    }
    
}])
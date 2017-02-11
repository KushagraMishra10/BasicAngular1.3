angular.module("products",['ngRoute']);

angular.module("products").config(["$routeProvider","$httpProvider",function($routeProvider,$httpProvider) {


    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'partials/products-list.html',
        controller: 'ProductListController'
      })
      .otherwise({
        redirectTo: '/'
      });


  }]);
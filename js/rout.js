var app = angular.module('storeApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/login',{
                        templateUrl:'Views/login.html',
                        controller:'storecontroller'
                        }).when('/billing',{
                        templateUrl:'Views/billing.html',
                        controller:'storecontroller'
                        }).when('/summary',{
                        templateUrl:'Views/summary.html',
                          controller:'storecontroller'
                       
    }).otherwise({redirectTo:'/login'});
            
});
app.controller('storecontroller',function($scope,$http,$location,$routeParams){
  
    $scope.final=$routeParams.final;
    console.log($scope.final);
    $scope.Billdate = $routeParams.Billdate;
    

  $scope.addMore = function(details,n) {
      
      if (n==1) {
          
          details.price1=$scope.perunit1*details.units;
          
          details.price = details.price1 + "Rupees"
      } else if(n==2){
          
          details.price2=$scope.perunit2*details.units;
          
          details.price = details.price2 + "Rupees"
          
      }else if(n==3){
       details.price3=$scope.perunit3*details.units;
       
          details.price = details.price3 + "Rupees"   
          
          
      }else if(n==4){
          details.price4=$scope.perunit4*details.units;
       
          details.price = details.price4 + "Rupees"
          
          
      }else if(n==5){
          
          details.price1=$scope.perunit5*details.units;
          
          details.price = details.price5 + "Rupees"
          
      }
        } 
  
    $scope.submit = function() {
        
     if($scope.loginform.$valid) {
         
        $http.get('js/users.json').success(function(data){

             $scope.authorized = data;
         
          for(i=0; i < $scope.authorized.length; i++){
                 
                if(($scope.user.name == $scope.authorized[i].name)&& ($scope.user.name == $scope.authorized[i].name)) {
                $location.url('/billing').search({"authorizedname":$scope.user.name}); 
                    break;
            
                }
            }
            
            
        });
        
     } else {
         
         $scope.early = true;
     }
        
    }
     $http.get('js/inventory.json').success(function(data){
     
     $scope.inventoryProducts = data;
     });

    $scope.addProduct = function(n) {
        
        if(n==1) {
            for(i=0; i < $scope.inventoryProducts.length;i++) {
              
                if($scope.products.product1.id == $scope.inventoryProducts[i].ProductId) {
                    $scope.products.product1.name = $scope.inventoryProducts[i].ProductName;
                     $scope.products.product1.units = 1 ;
                     $scope.products.product1.unitprice = $scope.inventoryProducts[i].Price + " Per Unit";
                         $scope.products.product1.price = $scope.inventoryProducts[i].Price + " Rupees";
                                        
                    $scope.perunit1  =  parseInt($scope.inventoryProducts[i].Price);
 
                }
            }
        
            
        
        }
        
        if(n==2) {
            for(i=0; i < $scope.inventoryProducts.length;i++) {
              
                if($scope.products.product2.id == $scope.inventoryProducts[i].ProductId) {
                    $scope.products.product2.name = $scope.inventoryProducts[i].ProductName;
                     $scope.products.product2.units = 1 ;
                     $scope.products.product2.unitprice = $scope.inventoryProducts[i].Price + " Per Unit";
                         $scope.products.product2.price = $scope.inventoryProducts[i].Price + " Rupees";
                            $scope.perunit2  =  parseInt($scope.inventoryProducts[i].Price);              
                
                    
                }
            }
        
            
        
        }
             if(n==3) {
               
            for(i=0; i < $scope.inventoryProducts.length;i++) {
              
                if($scope.products.product3.id == $scope.inventoryProducts[i].ProductId) {
                    $scope.products.product3.name = $scope.inventoryProducts[i].ProductName;
                     $scope.products.product3.units = 1 ;
                     $scope.products.product3.unitprice = $scope.inventoryProducts[i].Price + " Per Unit";
                         $scope.products.product3.price = $scope.inventoryProducts[i].Price + " Rupees";
                                        
                       $scope.perunit3  =  parseInt($scope.inventoryProducts[i].Price);  
                    
                }
            }
        
            
        
        }
          if(n==4) {
              
            for(i=0; i < $scope.inventoryProducts.length;i++) {
                   
                if($scope.products.product4.id == $scope.inventoryProducts[i].ProductId) {
                    $scope.products.product4.name = $scope.inventoryProducts[i].ProductName;
                     $scope.products.product4.units = 1 ;
                     $scope.products.product4.unitprice = $scope.inventoryProducts[i].Price + " Per Unit";
                         $scope.products.product4.price = $scope.inventoryProducts[i].Price + " Rupees";
                                        
                       $scope.perunit4  =  parseInt($scope.inventoryProducts[i].Price);  
                    
                }
            }
        
            
        
        }
                 if(n==5) {
           
            for(i=0; i < $scope.inventoryProducts.length;i++) {
              
                if($scope.products.product5.id == $scope.inventoryProducts[i].ProductId) {
                    $scope.products.product5.name = $scope.inventoryProducts[i].ProductName;
                     $scope.products.product5.units = 1 ;
                     $scope.products.product5.unitprice = $scope.inventoryProducts[i].Price ;
                         $scope.products.product5.price = $scope.inventoryProducts[i].Price + " Rupees";
                                        
                       $scope.perunit5  =  parseInt($scope.inventoryProducts[i].Price);  
                    
                }
            }
        
            
        
        }
      
        
    }

$scope.summary = function(bill) {

    if(bill==undefined){
         $scope.empty=true;  
      
    } else {
       
                            
  alert(JSON.stringify(bill));
        
            
            
                        
  alert(JSON.stringify($scope.final));
        
          $scope.Billdate = new Date().toLocaleString();
     $location.url('/summary').search({"final":$scope.final,"Billdate":$scope.Billdate});
       
     
             
              
                }
    
}
        
});

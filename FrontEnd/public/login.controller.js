angular.module("App").controller("LoginController",['$scope','$location',
    function($scope,$location){
        $scope.login=(username,password)=>{
            if(username==='SiteManager'){
                $location.path('/managerlogin');
            }
            else if(username==='Staff'){
                $location.path('/stafflogin');
            }
            else{
                alert("Incorrect username")
            }
        };
        $scope.logout=()=>
        {
            $location.path('/');
        };


    }]);

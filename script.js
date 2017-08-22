var departure = [];
var arrival = [];
for(i =0; i<FLIGHT_DATA.length;i++){
  if(FLIGHT_DATA[i].type == "departure") departure.push(FLIGHT_DATA[i]);
  else arrival.push(FLIGHT_DATA[i]);
}

var app = angular.module("flightApp", ["ngRoute"]);

app.filter('startFrom', function(){
  return function(input, start){
    start = +start;
    return input.slice(start);
  }
})
app.controller("flightCtrl", function($scope){

	$scope.sortType  = '';
 	$scope.getSortType = function(type){
 		$scope.sortType = type;
 	}

  $scope.type = "DEPARTURE";
  $scope.data = departure;
  
  
  $scope.getArr = function(){
  	$scope.data = arrival;
    $scope.type = "ARRIVAL";
    $scope.currentPage = 0;
  }

  $scope.getDep = function(){
  	$scope.type = "DEPARTURE";
    $scope.data = departure;
    $scope.currentPage = 0;
  }

//pagination
  $scope.currentPage = 0;
  $scope.itemsPerPage = 10;
  $scope.items = [];
  for(var i=0; i<$scope.data.length; i++){
    $scope.items.push('Product ' + i);
  }
  $scope.firstPage = function() {
    return $scope.currentPage == 0;
  }
  $scope.lastPage = function() {
    var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
    return $scope.currentPage == lastPageNum;
  }
  $scope.numberOfPages = function(){
    return Math.ceil($scope.items.length / $scope.itemsPerPage);
  }
  $scope.startingItem = function() {
    return $scope.currentPage * $scope.itemsPerPage;
  }
  $scope.pageBack = function() {
    $scope.currentPage = $scope.currentPage - 1;
  }
  $scope.pageForward = function() {
    $scope.currentPage = $scope.currentPage + 1;
  }

 
});
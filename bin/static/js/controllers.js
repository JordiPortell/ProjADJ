'use strict';

var VenteControllers = angular.module('VenteControllers', []);



/**
 * Controls the Blog
 */
VenteControllers.controller('BlogCtrl',function($scope,$http,$routeParams) {
  console.log("Blog Controller reporting for duty.");
  $http.get('http://localhost:8080/').
  success(function(data, status, headers, config) {
		alert('location ok');
  }).
  error(function(data, status, headers, config) {
  });
});

/**
 * Controls all other Pages
 */
VenteControllers.controller('PageCtrl',function($scope,$http,$routeParams) {
  console.log("Page Controller reporting for duty.");
  
	$http.get('http://localhost:8080/locationVoiture/voiture').
	  success(function(data, status, headers, config) {
			alert('location ok');
	  }).
	  error(function(data, status, headers, config) {
	  });

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

/*locationControllers.controller("locationController", function($scope,$http,$routeParams) {

	$http.get('http://localhost:8080/locationVoiture/voiture').
	  success(function(data, status, headers, config) {
	  	$scope.voitures = data;
	  	$scope.selected = data[0];
	  }).
	  error(function(data, status, headers, config) {
	  });

	$scope.rent = function(selected) {
		$http.put('http://localhost:8080/locationVoiture/voiture/'+selected.immatriculation+'?louer=true').
		  success(function(data, status, headers, config) {
		  	alert('location ok');
		  }).
		  error(function(data, status, headers, config) {
			  alert('erreur');
		  });
	};
        
});

locationControllers.controller("ramenerController", function($scope,$http,$routeParams) {

	$scope.client = '';
	
	$scope.creation = function(client) {
		$http.post('http://localhost:8080/locationVoiture/voiture/'+client+'?louer=false').
		  success(function(data, status, headers, config) {
		  	alert('ramener ok');
		  }).
		  error(function(data, status, headers, config) {
			  alert('erreur');
		  });
	};
        
});
*/

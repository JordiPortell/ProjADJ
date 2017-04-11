'use strict';


var app = angular.module('tutorialWebApp', [
                                            'ngRoute',
                                            'VenteControllers'
                                          ]);

                                          /**
                                           * Configure the Routes
                                           */
                                          app.config(['$routeProvider', function ($routeProvider) {
                                            $routeProvider
                                              // Home
                                              .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
                                              // Pages
                                              .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
                                              .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
                                              .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
                                              .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
                                              .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
                                              // Blog
                                              .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
                                              .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
                                              // else 404
                                              .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
                                          }]);
                                          
/*var app = angular.module('rentCar', [
	'ngRoute','locationControllers'                                               ]);

angular.element(function() {
    angular.bootstrap(document, ['rentCar']);
});
app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/rentCars', {
				templateUrl: 'partials/menu.html'
			}).
			when('/rentCars/louer', {
				templateUrl: 'partials/location.html',
				controller: 'locationController'
			}).
			when('/rentCars/ramener', {
				templateUrl: 'partials/ramenerVoiture.html',
				controller: 'ramenerController'
			}).
			otherwise({
				redirectTo: '/rentCars'
			});
}]);*/

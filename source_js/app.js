var app = angular.module('mp3', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/list", {
        templateUrl : "./partials/list.html",
        controller: 'MoviesListController'
    })
    .when("/details/:selectedRank", {
        templateUrl : "./partials/details.html",
        controller: 'MoviesDetailsController'
    })
    .when("/gallery", {
        templateUrl : "./partials/gallery.html",
        controller: 'MoviesGalleryController'
    })
    .otherwise({
      redirectTo: '/list'
    });
});

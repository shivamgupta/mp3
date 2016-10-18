/* Sample Controller */

app.controller('MoviesListController', ['$scope', '$http', function ($scope, $http) {

	$scope.search = "";
	$scope.order = "rank";
	$scope.selectedRank = null;
	$scope.selectedMovie = null;

	$scope.selectMovie = function (movie, rank) {
		$scope.selectedRank = rank;
		$scope.selectedMovie = $scope.movies[rank];
	};
	
	/*Udemy - AngularJS Course*/
	$scope.sensitiveSearch = function(movie) {
		if ($scope.search) {
			return movie.title.indexOf($scope.search) == 0;
		}
		return true;
	};

	$http.get('./data/imdb250.json').success(function(data){
		$scope.movies = data;
	}).error(function(err){
		console.log(err);
	})
}]);

app.controller('MoviesGalleryController', ['$scope', '$http', function ($scope, $http) {

	$http.get('./data/imdb250.json').success(function(data){
		$scope.movies = data;
	}).error(function(err){
		console.log(err);
	})
}]);

app.controller('MoviesDetailsController', ['$scope', '$http', '$routeParams',  function($scope, $http, $routeParams) {

	$http.get('./data/imdb250.json').success(function(data){
		$scope.movies = data;
		
		$scope.selectedRank = $routeParams.selectedRank-1;
		$scope.selectedMovie = $scope.movies[$scope.selectedRank];
		console.log($scope.selectedMovie);

		$scope.getIndex = function(currentIndex, shift){
		var len = $scope.movies.length;
		return (((currentIndex + shift) + len) % len);
		};

		$scope.selectMovie = function (movie, rank) {
			$scope.selectedRank = rank;
			$scope.selectedMovie = $scope.movies[rank];
		};

		$scope.next = function(){
		  var i = $scope.getIndex($scope.selectedMovie.rank-1, 1);
		  $scope.selectedMovie = $scope.movies[i];
		};

		$scope.previous = function(){
		  var i = $scope.getIndex($scope.selectedMovie.rank-1, -1);
		  $scope.selectedMovie = $scope.movies[i];
		};


	}).error(function(err){
		console.log(err);
	});

}]);

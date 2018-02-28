var app = angular.module('albums', []);
app.controller('AlbumController', ['$scope', function($scope) {
    var albums = [{
        title: 'Wretch',
        artist: 'Kyuss'
    },
        {
            title: 'Sky Valley',
            artist: 'Kyuss'
        },
        {
            title: 'The Will To Live',
            artist: 'Ben Harper'
        },
        {
            title: 'Fight for Your Mind',
            artist: 'Ben Harper'
        }];
    $scope.albums = albums;
    $scope.printAlbums = function() {
        $scope.albums.forEach(function(album) {
            console.log(album);
        });
    }
}]);
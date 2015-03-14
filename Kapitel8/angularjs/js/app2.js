var app = angular.module('albums', []);
app.controller('AlbumController', ['$scope', 'AlbumService', function($scope, AlbumService) {
    $scope.albums = AlbumService.getAlbums();
    $scope.printAlbums = function() {
        $scope.albums.forEach(function(album) {
            console.log(album);
        })
    }
}]);
app.factory('AlbumService', function() {
    return {
        getAlbums: function() {
            return [
                {
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
                }
            ]
        }
    }
});
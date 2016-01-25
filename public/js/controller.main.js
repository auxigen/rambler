(function () {
    'use strict';
    angular.module("ramblerApp").controller()
        .controller("mainCtrl", ['$scope', function ($scope) {
            $scope.data = [
                {
                    id: "00001",
                    name: "Rick",
                    profile: "http://ih1.redbubble.net/image.97206394.2661/flat,800x800,075,t.u1.jpg",
                    occupation: "Inventor"
                },
                {
                    id: "00002",
                    name: "Morty",
                    profile: "http://ih0.redbubble.net/image.106834143.1923/flat,800x800,075,f.u1.jpg",
                    occupation: "Sidekick"
                },
                {
                    id: "00003",
                    name: "Jerry",
                    profile: "http://vignette3.wikia.nocookie.net/rickandmorty/images/5/5d/Jerry_S01E11_Sad.JPG/revision/latest?cb=20140501090439",
                    occupation: "Village Idiot"
                }
                //
            ];
        }]);
}());
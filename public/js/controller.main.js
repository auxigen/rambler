(function () {
    'use strict';
    angular.module("ramblerApp").controller()
        .controller("mainCtrl", ['$scope', function ($scope) {
            $scope.data = [
                {
                    id: "00001",
                    name: "Rick",
                    profile: "http://ih1.redbubble.net/image.97206394.2661/flat,800x800,075,t.u1.jpg",
                    occupation: "Inventor",
                    date: "2016-01-26T15:24:00Z",
                    seen: 5
                },
                {
                    id: "00002",
                    name: "Morty",
                    profile: "http://ih0.redbubble.net/image.106834143.1923/flat,800x800,075,f.u1.jpg",
                    occupation: "Sidekick",
                    date: "2015-05-05T12:34:56Z",
                    seen: 10
                },
                {
                    id: "00003",
                    name: "Jerry",
                    profile: "http://vignette3.wikia.nocookie.net/rickandmorty/images/5/5d/Jerry_S01E11_Sad.JPG/revision/latest?cb=20140501090439",
                    occupation: "Village Idiot",
                    date: "2014-01-01T12:34:56Z",
                    seen: 3
                }
                ,
                {
                    id: "00004",
                    name: "Beth",
                    profile: "http://static.tvtropes.org/pmwiki/pub/images/bethandmorty_8075.png",
                    occupation: "Horse Surgeon",
                    date: "2013-01-01T12:34:56Z",
                    seen: 1
                }
                //http://static.tvtropes.org/pmwiki/pub/images/bethandmorty_8075.png
            ];
        }]);
}());
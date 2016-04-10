(function(){
    var app = angular.module('frankRoss',['ngMaterial'])
    .controller('AppCtrl', function() {
        this.userState = '';
        this.states = ('Kolkata Orrisa').split(' ').map(function (state) { return { abbrev: state }; });
    })
    .directive('topTemplate', function(){
        return{
            restrict: 'E',
            templateUrl: 'html/top-template.html'
        };
    })
    .directive('secTemplate', function(){
        return{
            restrict: 'E',
            templateUrl: 'html/sec-template.html'
        };
    })
    .directive('footTemplate', function(){
        return{
            restrict: 'E',
            templateUrl: 'html/foot-template.html'
        };
    });

})();

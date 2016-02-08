angular.module('app.controllers', ['ionic'])


.controller('signinCtrl', function($scope) {

})

.controller('dasboardCtrl', function($scope) {
    $scope.all = [{
        name: 'Baju batik',
        stock: 4
    }, {
        name: 'Baju batik',
        stock: 54
    }, {
        name: 'Baju batik',
        stock: 3
    }, {
        name: 'Baju batik',
        stock: 15
    }, {
        name: 'Baju batik',
        stock: 0
    }, {
        name: 'Baju batik',
        stock: 1
    }, {
        name: 'Baju batik',
        stock: 0
    }, {
        name: 'Baju batik',
        stock: 4
    }, {
        name: 'Baju batik',
        stock: 34
    }]

    $scope.tab = {
        all: true,
        empty: false,
        minim: false,
        search: false
    }

    $scope.tabClick = function(menu) {
        if (menu == 'all') {
            $scope.tab = {
                all: true,
                empty: false,
                minim: false,
                search: false
            }
            angular.element(document.getElementById("menu-all")).addClass("focussed");
            angular.element(document.getElementById("menu-empty")).removeClass("focussed");
            angular.element(document.getElementById("menu-minim")).removeClass("focussed");
            angular.element(document.getElementById("menu-search")).removeClass("focussed");           
        }
        if (menu == 'empty') {
            $scope.tab = {
                all: false,
                empty: true,
                minim: false,
                search: false
            }
            angular.element(document.getElementById("menu-all")).removeClass("focussed");
            angular.element(document.getElementById("menu-empty")).addClass("focussed");
            angular.element(document.getElementById("menu-minim")).removeClass("focussed");
            angular.element(document.getElementById("menu-search")).removeClass("focussed");    
        }
        if (menu == 'minim') {
            $scope.tab = {
                all: false,
                empty: false,
                minim: true,
                search: false
            }
            angular.element(document.getElementById("menu-all")).removeClass("focussed");
            angular.element(document.getElementById("menu-empty")).removeClass("focussed");
            angular.element(document.getElementById("menu-minim")).addClass("focussed");
            angular.element(document.getElementById("menu-search")).removeClass("focussed");    
        }
        if (menu == 'search') {
            $scope.tab = {
                all: false,
                empty: false,
                minim: false,
                search: true
            }
            angular.element(document.getElementById("menu-all")).removeClass("focussed");
            angular.element(document.getElementById("menu-empty")).removeClass("focussed");
            angular.element(document.getElementById("menu-minim")).removeClass("focussed");
            angular.element(document.getElementById("menu-search")).addClass("focussed");    
        }
    }
})


.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('gudangkuCtrl', function($scope) {

})

.controller('semuaProdukCtrl', function($scope) {

})

.controller('produkStokKosongCtrl', function($scope) {

})

.controller('produkStokMinimCtrl', function($scope) {

})

.controller('kategoriProdukCtrl', function($scope) {

})

.controller('cameraTabDefaultPageCtrl', function($scope) {

})

.controller('cartTabDefaultPageCtrl', function($scope) {

})

.controller('cloudTabDefaultPageCtrl', function($scope) {

})

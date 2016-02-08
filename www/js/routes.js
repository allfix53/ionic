angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('login', {
        url: '/page3',
        views: {
            'side-menu22': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    })

    .state('view', {
        url: '/view/loged',
        views: {
            'top-nav': {
                templateUrl: 'templates/partial/top-menu-dashboard.html',
                controller: 'test'
            }
        }
    })

    .state('signin', {
        url: '/signin',
        templateUrl: 'templates/gudangku/signin.html',
        controller: 'signinCtrl'
    })

    .state('signup', {
        url: '/signup',
        templateUrl: 'templates/gudangku/signup.html',
        controller: 'signinCtrl'
    })

    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'templates/gudangku/dashboard.html',
        controller: 'dasboardCtrl'
    })


    .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/welcome.html'
    })


    .state('menu.gudangku', {
        url: '/page5',
        views: {
            'side-menu22': {
                templateUrl: 'templates/gudangku.html',
                controller: 'gudangkuCtrl'
            }
        }
    })




    .state('menu', {
        url: '/side-menu22',
        abstract: true,
        templateUrl: 'templates/menu.html'
    })




    .state('tabsController.semuaProduk', {
        url: '/page6',
        views: {
            'tab1': {
                templateUrl: 'templates/semuaProduk.html',
                controller: 'semuaProdukCtrl'
            }
        }
    })





    .state('tabsController.produkStokKosong', {
        url: '/page10',
        views: {
            'tab2': {
                templateUrl: 'templates/produkStokKosong.html',
                controller: 'produkStokKosongCtrl'
            }
        }
    })





    .state('tabsController.produkStokMinim', {
        url: '/page11',
        views: {
            'tab3': {
                templateUrl: 'templates/produkStokMinim.html',
                controller: 'produkStokMinimCtrl'
            }
        }
    })





    .state('kategoriProduk', {
        url: '/page7',
        templateUrl: 'templates/kategoriProduk.html',
        controller: 'kategoriProdukCtrl'
    })





    .state('cameraTabDefaultPage', {
        url: 'side-menu22/page14',
        templateUrl: 'templates/cameraTabDefaultPage.html',
        controller: 'cameraTabDefaultPageCtrl'
    })





    .state('cartTabDefaultPage', {
        url: '/page15',
        templateUrl: 'templates/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
    })





    .state('cloudTabDefaultPage', {
        url: '/page16',
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
    })




    .state('tabsController', {
        url: '/page13',
        abstract: true,
        templateUrl: 'templates/tabsController.html'
    })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/signin');

});

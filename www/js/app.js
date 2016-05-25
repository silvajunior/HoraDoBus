// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.sobre', {
      url: '/sobre',
      views: {
        'menuContent': {
          templateUrl: 'templates/sobre.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
//Empresas
  .state('app.single', {
    url: '/playlists/1',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.conceicao', {
    url: '/playlists/2',
    views: {
      'menuContent': {
        templateUrl: 'empresas/conceicao.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
//Empresas Fim  
//     .state('app.single1', {
//     url: '/playlists/2',
//     views: {
//       'menuContent': {
//         templateUrl: 'templates/playlist.html',
//         controller: 'PlaylistCtrl'
//       }
//     }
//   })
 //Gunabara Inicio  
    .state('app.single2', {
    url: '/guanabara/1',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/01a.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
      .state('app.single3', {
    url: '/guanabara/2',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/01b.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
        .state('app.single4', {
    url: '/guanabara/3',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/02.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

          .state('app.single5', {
    url: '/guanabara/4',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/04.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
            .state('app.single6', {
    url: '/guanabara/5',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/05.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
            .state('app.single7', {
    url: '/guanabara/6',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/08.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single8', {
    url: '/guanabara/7',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/10-29.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single9', {
    url: '/guanabara/8',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/12-14.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single10', {
    url: '/guanabara/9',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/13a.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single11', {
    url: '/guanabara/10',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/13b.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single12', {
    url: '/guanabara/11',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/15-16.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single13', {
    url: '/guanabara/12',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/17-78.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single14', {
    url: '/guanabara/13',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/18.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single15', {
    url: '/guanabara/14',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/19.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single16', {
    url: '/guanabara/15',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/19-domingo.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single17', {
    url: '/guanabara/16',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/20.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single18', {
    url: '/guanabara/17',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/23-69.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single19', {
    url: '/guanabara/18',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/25.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single20', {
    url: '/guanabara/19',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/588.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single21', {
    url: '/guanabara/20',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/592.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single22', {
    url: '/guanabara/21',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/593.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single23', {
    url: '/guanabara/22',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/60.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single24', {
    url: '/guanabara/23',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/61-61.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single25', {
    url: '/guanabara/24',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/64.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single26', {
    url: '/guanabara/25',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/64a43.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single27', {
    url: '/guanabara/26',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/67.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single28', {
    url: '/guanabara/27',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/70.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single29', {
    url: '/guanabara/28',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/72.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single30', {
    url: '/guanabara/29',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/75a.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single31', {
    url: '/guanabara/30',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/75b.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single32', {
    url: '/guanabara/31',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/76.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single33', {
    url: '/guanabara/32',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/76-domingo.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single34', {
    url: '/guanabara/33',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/77.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single35', {
    url: '/guanabara/34',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/79.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single36', {
    url: '/guanabara/35',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/81.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single37', {
    url: '/guanabara/36',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/84.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
              .state('app.single38', {
    url: '/guanabara/37',
    views: {
      'menuContent': {
        templateUrl: 'empresas/guanabara/b.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  //Gunabara Fim
  //Conceicao
                .state('app.conceicao1', {
    url: '/conceicao/1',
    views: {
      'menuContent': {
        templateUrl: 'empresas/conceicao/1/index.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
                  .state('app.conceicao2', {
    url: '/conceicao/2',
    views: {
      'menuContent': {
        templateUrl: 'empresas/conceicao/2/index.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
                  .state('app.conceicao3', {
    url: '/conceicao/3',
    views: {
      'menuContent': {
        templateUrl: 'empresas/conceicao/3/index.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  //Conceicao Fim
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/sobre');
});


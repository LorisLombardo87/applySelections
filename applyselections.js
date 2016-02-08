define([
        'jquery',
        'underscore',
        'qlik',
        'angular',
        './properties',
        './initialproperties',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css',
        'text!./lib/partials/template.html'
],
function ($, _, qlik, angular, props, initProps, extensionUtils, cssContent, template) {
    'use strict';

    extensionUtils.addStyleToHeader(cssContent);

    console.log('Initializing - remove me');

    return {

        definition: props,

        initialProperties: initProps,

        snapshot: { canTakeSnapshot: true },

        resize : function( /*$element, layout*/ ) {
            //do nothing
        },

		//clearSelectedValues : function($element) {
		//
		//},


        // Angular Support 
        template: template,

        // Angular Controller
        controller: ['$scope', function ($scope) {
            var app= qlik.currApp(this);
            console.log(app);

            var config = {
                host: window.location.hostname,
                prefix: window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 ),
                port: window.location.port,
                isSecure: window.location.protocol === "https:"
            };
            var global = qlik.getGlobal(config);
            
            global.getAuthenticatedUser(function(reply){                
                //UserDirectory=HORSA; UserId=loris.lombardo
                var s = reply.qReturn.substring(0, reply.qReturn.indexOf(';'));
                var s2 = reply.qReturn.substring(reply.qReturn.indexOf(';')+1, reply.qReturn.length);
                s = s.substring(s.indexOf('=')+1, s.length);
                s2 = s2.substring(s2.indexOf('=')+1, s2.length);

                $scope.directory = s;
                $scope.userid = s2;

                console.log('User:',$scope.userid);
                console.log('Directory:',$scope.directory);

                $scope.setFilters();
            });

            console.log('props', $scope.layout.props);

            $scope.setFilters = function(){
                var bookmark = null;
                console.log('ok');
                if ($scope.layout.hasOwnProperty('props')){
                    for (var rulen in $scope.layout.props.rules) {
                        //console.log(rulen, $scope.layout.props.rules[rulen]);
                        var rule = $scope.layout.props.rules[rulen];
                        if ((rule.users.indexOf($scope.userid) >= 0 || rule.type == 'a')  && rule.enabled){
                            bookmark = rule.bookmark;
                            console.log('apply', bookmark)
                        }
                    }
                }
                if (bookmark != null){
                    app.bookmark.apply(bookmark);
                }

            };
        }],


        paint: function ( $element /*, layout*/ ) {

            /*
            console.groupCollapsed('Basic Objects');
            console.info('$element:');
            console.log($element);
            console.info('layout:');
            console.log(layout);
            console.groupEnd();

            $element.empty();
            var $helloWorld = $(document.createElement('div'));
            $helloWorld.addClass('hello-world');
            $helloWorld.html('Hello World from the extension "applySelections"');
            $element.append($helloWorld);

            */

        }
    };

});

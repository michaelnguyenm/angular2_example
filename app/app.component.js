//This is an IIFE, or Immediately-Invoked Function Expression
//(function(){...}), parenthesis on the outside turns the function
//into an expression. adding (); calls that function
//Used to avoid "polluting the global namespace"
//In otherwords, all variables inside the IIFE stay within that scope
(function(app) {
    app.AppComponent = ng.core //The visual component, "exports" to app namespace
        .Component({
            selector: 'my-app',
            template: '<h1>Hello, World!</h1>'
        })
        .Class({ //Ordinarily allows us to give properties/methods for this part of the UI
            constructor: function() {} //Empty constructor
        });
})(window.app || (window.app = {}));

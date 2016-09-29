(function(app){
    app.AppModule =
        ng.core.NgModule({
            imports: [ ng.platformBrowser.BrowserModule],
            declarations: [ app.AppComponent ],
            bootstrap: [ app.AppComponent ]
        })
        .class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));

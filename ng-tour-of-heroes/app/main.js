System.register(['angular2/platform/browser', './hero-form'], function(exports_1) {
    var browser_1, hero_form_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (hero_form_1_1) {
                hero_form_1 = hero_form_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(hero_form_1.HeroFormComponent);
        }
    }
});
//bootstrap(appComponent); 
//# sourceMappingURL=main.js.map
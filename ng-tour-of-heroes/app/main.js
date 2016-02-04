System.register(['angular2/platform/browser', './data-displaying'], function(exports_1) {
    var browser_1, data_displaying_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (data_displaying_1_1) {
                data_displaying_1 = data_displaying_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(data_displaying_1.appComponent);
        }
    }
});
//# sourceMappingURL=main.js.map
"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router_1 = require("./router");
var types_1 = require("./types");
var createApp = function () {
    var app = express_1["default"]();
    var router = router_1.createRouter();
    app.use(types_1.EApiPath.eventsPath, router);
    return app;
};
exports.createApp = createApp;

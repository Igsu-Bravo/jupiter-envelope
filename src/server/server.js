"use strict";
exports.__esModule = true;
var server_destroy_1 = require("server-destroy");
var app_1 = require("./app");
var self = this;
// TODO: Bring this stuff from config
var EWebParams;
(function (EWebParams) {
    EWebParams[EWebParams["port"] = 8080] = "port";
    EWebParams["host"] = "localhost";
})(EWebParams || (EWebParams = {}));
var createServer = function (gracefulShutdown) {
    if (gracefulShutdown === void 0) { gracefulShutdown = true; }
    // Create express server and start listening
    var app = app_1.createApp();
    var server = app.listen(EWebParams.port, EWebParams.host, function () {
        console.log("Listening on " + EWebParams.host + ":" + EWebParams.port);
    });
    server_destroy_1["default"](server);
    if (gracefulShutdown) {
        // Handler for shutdown
        var closeServer = function (signal) {
            console.log(signal + " received");
            console.log("Closing server...");
            server.destroy();
        };
        // Handle signals grcefully
        process.on("SIGTERM", closeServer.bind(self, "SIGTERM"));
        process.on("SIGINT", closeServer.bind(self, "SIGINT"));
        server.on("close", function () {
            console.log("Server close event fired, givin 5000ms time to cleanup...");
            setTimeout(process.exit, 5000);
        });
    }
    return server;
};
exports.createServer = createServer;

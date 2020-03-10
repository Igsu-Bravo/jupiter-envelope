"use strict";
exports.__esModule = true;
var express_1 = require("express");
// This function returns an express router with the defined routes when called
var createRouter = function () {
    var router = express_1.Router();
    router.get("/status", function (req, res) {
        res.sendStatus(200);
    });
    return router;
};
exports.createRouter = createRouter;

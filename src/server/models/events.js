"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
// Connect to Heroku mLab MongoDB
mongoose_1["default"].connect(process.env.MONGODB_URI || "mongodb://localhost/events", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
var eventSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    dates: [{ type: String, required: true }],
    votes: [{ date: { type: String, required: true }, people: [String] }]
});
exports["default"] = eventSchema;

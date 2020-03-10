import mongoose, { Schema } from "mongoose";

// Connect to Heroku mLab MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/events", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
});

const eventSchema = new Schema({
	name: { type: String, require: true },
	dates: [{ type: String, required: true }],
	votes: [{ date: { type: String, required: true }, people: [String] }]
});

export default eventSchema;

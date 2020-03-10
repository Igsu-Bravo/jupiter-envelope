import { Router } from "express";

// This function returns an express router with the defined routes when called
const createRouter = () => {
	const router = Router();

	router.get("/status", (req, res) => {
		res.sendStatus(200);
	});

	return router;
};

export { createRouter };

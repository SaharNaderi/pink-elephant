import { Router } from "express";

import logger from "./utils/logger";
import { GET_USERS_PATH } from "./constants/pathConstants";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get(GET_USERS_PATH, async (req, res) => {
	try {
		const queryResult = await db.query("SELECT * FROM users");
		const users = queryResult.rows;

		if (users.length === 0) {
			return res.status(404).json({ msg: "No users found!" });
		}

		return res
			.status(200)
			.json({ msg: `${users.length} users found!`, data: users });
	} catch (err) {
		logger.error("Error fetching users: %O", err);
		return res.status(500).json({ msg: "Internal server error" });
	}
});


export default router;

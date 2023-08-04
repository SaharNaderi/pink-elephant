import { Router } from "express";

import logger from "./utils/logger";
import { USERS_PATH } from "./constants/pathConstants";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get(USERS_PATH, async (req, res) => {
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

router.post(USERS_PATH, async (req, res) => {
	try {
		const {
			first_name,
			last_name,
			age,
			role,
			nationality,
			location,
			soft_skills,
			hard_skills,
			mobile,
			email,
			linkedin,
			youtube,
			description,
			hobbies,
		} = req.body;

		await db.query(
			"INSERT INTO users (first_name, last_name, age, role, nationality, location, soft_skills, hard_skills, mobile, email, linkedin, youtube, description, hobbies) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)",
			[
				first_name,
				last_name,
				age,
				role,
				nationality,
				location,
				soft_skills,
				hard_skills,
				mobile,
				email,
				linkedin,
				youtube,
				description,
				hobbies,
			]
		);

		return res.status(201).json({ msg: "User data inserted successfully!" });
	} catch (err) {
		logger.error("Error inserting user data: %O", err);
		return res.status(500).json({ msg: "Internal server error" });
	}
});

export default router;

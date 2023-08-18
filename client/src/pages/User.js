import "../styles/user.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import userImg from "../images/user.svg";

export default function User() {
	const [user, setUser] = useState({});
	const params = useParams().userId;

	useEffect(() => {
		fetch(`https://starter-kit-4v51.onrender.com/api/users/${params}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setUser(body.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [params]);

	return (
		<>
			<div className="userDetail">
				<div className="profile">
					<img className="userImg" src={userImg} alt="" />
					<p className="text">
						<span className="detail"> First name:</span> {user.first_name}
					</p>
					<p className="text">
						<span className="detail">Last name:</span> {user.last_name}
					</p>
					<p className="text">
						<span className="detail">Age:</span> {user.age}
					</p>
					<p className="text">
						<span className="detail"> Role:</span> {user.role}
					</p>
					<p className="text">
						<span className="detail"> Location</span>: {user.location}
					</p>
					<p className="text">
						<span className="detail">Email:</span>
						{user.email}
					</p>
				</div>
				<div className="description">
					<p className="text">
						<span className="detail">Mobile:</span> {user.mobile}
					</p>
					<p className="text">
						<span className="detail"> Linkedin:</span> {user.linkedin}
					</p>

					<p className="text">
						<span className="detail"> SoftSkills:</span> {user.soft_skills}
					</p>
					<p className="text">
						<span className="detail"> HardSkills:</span> {user.hard_skills}
					</p>

					<p className="text">
						<span className="detail">Description:</span> {user.description}
					</p>
				</div>
			</div>
		</>
	);
}

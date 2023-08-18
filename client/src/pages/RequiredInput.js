import "../styles/requiredInput.css";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { addNewUser } from "../Utils/helperFunctions";
import { useNavigate } from "react-router-dom";

const userDetailsState = atom({
	key: "registerFormInputsState",
	default: {
		firsName: "",
		lastName: "",
		age: "",
		role: "",
		nationality: "",
		location: "",
		softSkill: "",
		hardSkill: "",
		mobile: "",
		email: "",
		linkedin: "",
		youtube: "",
		description: "",
		hobbies: "",
		submit: false,
	},
});

const dataSelector = selector({
	key: "mobileNumberLength",
	get: ({ get }) => {
		const form = get(userDetailsState);

		const firstName = form.firsName.length;
		const lastName = form.lastName.length;
		const email = form.email.length;
		const role = form.role.length;
		const location = form.location.length;
		const age = form.age;
		const description = form.description.length;

		const submit = form.submit;

		return {
			firstName,
			lastName,
			email,
			role,
			location,
			age,
			description,
			submit,
		};
	},
});

export default function RequiredInput() {
	const [form, setForm] = useRecoilState(userDetailsState);
	const data = useRecoilValue(dataSelector);
	const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();

		setForm({
			...form,
			submit: true,
		});
		if (
			data.firstName !== 0 &&
			data.lastName !== 0 &&
			data.email !== 0 &&
			(data.age < 100 || data.age > 18) &&
			data.role !== 0 &&
			data.location !== 0 &&
			data.description !== 0
		) {
			const newUserInfos = {
				first_name: form.firsName,
				last_name: form.lastName,
				age: form.age,
				role: form.role,
				nationality: form.nationality,
				location: form.location,
				soft_skills: form.softSkill,
				hard_skills: form.hardSkill,
				mobile: form.mobile,
				email: form.email,
				linkedin: form.linkedin,
				youtube: form.youtube,
				description: form.description,
				hobbies: form.hobbies,
			};

			const res = addNewUser(newUserInfos);
			if (res) {
				navigate("/users");
			} else {
				console.log("error");
			}
		}
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<div className="form">
					<div className="formContainer">
						<div>
							<h2 className="text  formTitle">Requires</h2>

							<div className="inputContainer">
								<label className="text" htmlFor="firstName">
									First Name
								</label>
								<input
									className="input text"
									type="text"
									id="firstName"
									placeholder="firstName"
									onChange={(e) =>
										setForm({
											...form,
											firsName: e.target.value,
										})
									}
									value={form.firsName}
								/>

								{data.submit && data.firstName === 0 && (
									<p className="invalid text">invalid</p>
								)}
							</div>

							<div className="inputContainer">
								<label className="text" htmlFor="lastName">
									Last Name
								</label>

								<input
									className="input text"
									type="text"
									id="lastName"
									placeholder="lastName"
									onChange={(e) =>
										setForm({
											...form,
											lastName: e.target.value,
										})
									}
									value={form.lastName}
								/>

								{data.submit && data.lastName === 0 && (
									<p className="invalid text">invalid</p>
								)}
							</div>

							<div className="inputContainer">
								<label className="text" htmlFor="age">
									Age
								</label>

								<input
									className="input text"
									type="text"
									id="age"
									placeholder="age"
									onChange={(e) =>
										setForm({
											...form,
											age: e.target.value,
										})
									}
									value={form.age}
								/>

								{((data.submit && +data.age < 18) || +data.age > 100) && (
									<p className="invalid text">invalid</p>
								)}
							</div>

							<div className="inputContainer">
								<label className="text" htmlFor="role">
									Role
								</label>

								<input
									className="input text"
									type="text"
									id="role"
									placeholder="role"
									onChange={(e) =>
										setForm({
											...form,
											role: e.target.value,
										})
									}
									value={form.role}
								/>
								{data.submit && data.role === 0 && (
									<p className="invalid text">invalid</p>
								)}
							</div>

							<div className="inputContainer">
								<label className="text" htmlFor="location">
									Location
								</label>

								<input
									className="input text"
									type="text"
									id="location"
									placeholder="location"
									onChange={(e) =>
										setForm({
											...form,
											location: e.target.value,
										})
									}
									value={form.location}
								/>
								{data.submit && data.location === 0 && (
									<p className="invalid text">invalid</p>
								)}
							</div>

							<div className="inputContainer">
								<label className="text" htmlFor="email">
									Email
								</label>

								<input
									className="input text"
									type="text"
									id="email"
									placeholder="email"
									onChange={(e) =>
										setForm({
											...form,
											email: e.target.value,
										})
									}
									value={form.email}
								/>
								{data.submit && data.email === 0 && (
									<p className="invalid text">invalid</p>
								)}
							</div>

							<div className="inputContainer">
								<label className="text" htmlFor="description">
									Description
								</label>

								<input
									className="input text"
									type="text"
									id="description"
									placeholder="description"
									onChange={(e) =>
										setForm({
											...form,
											description: e.target.value,
										})
									}
									value={form.description}
								/>

								{data.submit && data.description === 0 && (
									<p className="invalid text">invalid</p>
								)}
							</div>
						</div>

						<div>
							<h2 className="text formTitle">Optional</h2>
							<div className="inputContainer">
								<label className=" text" htmlFor="nationality">
									Nationality
								</label>

								<input
									className="input text"
									type="text"
									id="nationality"
									placeholder=" nationality"
									onChange={(e) =>
										setForm({
											...form,
											nationality: e.target.value,
										})
									}
									value={form.nationality}
								/>
							</div>

							<div className="inputContainer">
								<label className=" text" htmlFor="hardSkill">
									Hard Skill
								</label>

								<input
									className="input text"
									type="text"
									id="hardSkill"
									placeholder=" Hard Skill"
									onChange={(e) =>
										setForm({
											...form,
											hardSkill: e.target.value,
										})
									}
									value={form.hardSkill}
								/>
							</div>

							<div className="inputContainer">
								<label className=" text" htmlFor="softSkill">
									Soft Skill
								</label>

								<input
									className="input text"
									type="text"
									id="softSkill"
									placeholder="Soft Skill"
									onChange={(e) =>
										setForm({
											...form,
											softSkill: e.target.value,
										})
									}
									value={form.softSkill}
								/>
							</div>

							<div className="inputContainer">
								<label className="text" htmlFor="mobile">
									Mobile
								</label>

								<input
									className="input text"
									type="text"
									id="mobile"
									placeholder="mobile"
									onChange={(e) =>
										setForm({
											...form,
											mobile: e.target.value,
										})
									}
									value={form.mobile}
								/>
							</div>

							<div className="inputContainer">
								<label className="text" htmlFor="linkedin">
									Linkedin
								</label>
								<input
									className="input text"
									type="text"
									id="linkedin"
									placeholder="Linkedin"
									onChange={(e) =>
										setForm({
											...form,
											linkedin: e.target.value,
										})
									}
									value={form.linkedin}
								/>
							</div>
							<div className="inputContainer">
								<label className="text" htmlFor="youtube">
									Youtube
								</label>

								<input
									className="input text"
									type="text"
									id="youtube"
									placeholder="youtube"
									onChange={(e) =>
										setForm({
											...form,
											youtube: e.target.value,
										})
									}
									value={form.youtube}
								/>
							</div>
							<div className="inputContainer">
								<label className="text" htmlFor="hobbies">
									Hobbies
								</label>

								<input
									className="input text"
									type="text"
									id="hobbies"
									placeholder="hobbies"
									onChange={(e) =>
										setForm({
											...form,
											hobbies: e.target.value,
										})
									}
									value={form.hobbies}
								/>
							</div>
						</div>
					</div>

					<button className="submitBtn text" type="submit">
						submit
					</button>
				</div>
			</form>
		</>
	);
}

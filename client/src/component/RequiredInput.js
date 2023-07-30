import { atom, useRecoilState } from "recoil";
import "./RequiredInput.css";

const userDetails = atom({
	key: "userDetails",
	default: {
		age: "",
	},
});

function RequiredInput({ type, placeholder }) {
	const [state, setState] = useRecoilState(userDetails);

	const onchangeHandler = (e) => {
		const value = e.target.value;
		const error = "";
		if (value && !isNaN(value) && 18 < value && value < 100) {
			setState({
				age: value,
				error,
			});
		} else {
			setState({
				age: "",
				error: "Invalid data",
			});

		}
	};

	return (
		<div>
			<input
				type={type}
				onChange={onchangeHandler}
				placeholder={placeholder}
				className={state.error ? "error" : "success"}
			/>
			<p className="error">{state.error}</p>
		</div>
	);
}

export default RequiredInput;

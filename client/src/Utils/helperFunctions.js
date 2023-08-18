export async function getAllUsers() {
	await fetch("https://starter-kit-4v51.onrender.com/api/users")
		.then((res) => {
			res.json();
		})
		.then((body) => {
			console.log(body);
			return body.data;
		})
		.catch((err) => {
			console.error(err);
		});
}

export async function addNewUser(newUserInfos) {
	await fetch("https://starter-kit-4v51.onrender.com/api/users", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(newUserInfos),
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			getAllUsers();
			return true;
		});
}

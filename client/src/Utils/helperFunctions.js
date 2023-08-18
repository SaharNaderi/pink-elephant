export function getAllUsers() {
	fetch("https://dummyjson.com/users")
		.then((res) => {
			res.json();
		})
		.then((body) => {
			console.log(body);
			return body;
		})
		.catch((err) => {
			console.error(err);
		});
}

export async function addNewUser(newUserInfos) {
	await fetch("https://dummyjson.com/users/add", {
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

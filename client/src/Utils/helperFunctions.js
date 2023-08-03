import { useEffect } from "react";







export function GetAllUsers() {



	useEffect(() => {
		fetch("/users")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				console.log(body.users);

			})
			.catch((err) => {
				console.error(err);
			});
	}, []);


}
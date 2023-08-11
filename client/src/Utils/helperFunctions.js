import { useEffect } from "react";

import { atom, useRecoilState } from "recoil";


export const allUserAtom = atom({
	key: "allUserAtom",
	default: [],
  });



export function GetAllUsers() {
	const [allUser, setAllUser] = useRecoilState(allUserAtom);


	useEffect(() => {
		fetch("https://starter-kit-4v51.onrender.com/api/users")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setAllUser(body.data);


			})
			.catch((err) => {
				console.error(err);
			});
	}, []);


}

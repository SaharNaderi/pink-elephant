import React from "react";
import UserBox from "../components/UserBox";
import "./../styles/users.css";
import {  useRecoilState } from "recoil";
import { allUserAtom } from "../Utils/helperFunctions";


export default function Users() {


    const [allUser, setAllUser] = useRecoilState(allUserAtom);

if(allUser.length === 0){
    return <p>Loading...</p>;
}
  return (
    <div className="userContainer">

{allUser.map((user)=>(<UserBox key={user.id} userID={user.id} firstName={user.firstName} lastName={user.lastName} Role={user.id}></UserBox>)

)}


    </div>
  );
}

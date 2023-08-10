import React from "react";
import { useParams } from "react-router-dom";
import { allUserAtom } from "../Utils/helperFunctions";
import {  useRecoilState } from "recoil";
import "./../styles/user.css";



export default function User() {

const params = useParams();
const users = useRecoilState(allUserAtom);

            const user = users.filter((user)=>{
            user.user_id === params.user_id;
            });

  return (
    <>
    <div className="userDetail">
        <div className="profile">

           <div className="image"></div>
           <p className="about">First name: {user.first_name} </p>
           <p className="about">Last name: {user.last_name}</p>
           <p className="about">Age: {user.age}</p>
           <p className="about">Role: {user.role}</p>
           <p className="about">Location: {user.location}</p>
           <p className="about">Email: {user.email}</p>

        </div>
        <div className="description">
            <div className="descriptionLeft">
                <p className="about">SoftSkills: {user.soft_skills}</p>
                 <p className="about">HardSkills:
                 {user.hard_skills}</p>


            </div>
            <div className="descriptionRight">

                <p className="about">Mobile: {user.mobile}</p>
                <p className="about">Linkedin: {user.linkedin}</p>
            </div><p className="about">Description: {user.description}</p>
        </div>
    </div>

    </>
  );
}

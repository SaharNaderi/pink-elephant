import React from "react";
import UserBox from "../components/UserBox";
import "./../styles/users.css";
import {  useRecoilState } from "recoil";
import { allUserAtom } from "../Utils/helperFunctions";


export default function Users() {

const allUser = [{"user_id":1,"first_name":"Mash","last_name":"Ali","age":28,"role":"Tech Lead","nationality":"UK","location":"London","soft_skills":"Communication","hard_skills":"React","mobile":"123456789","email":"ali@example.com","linkedin":"mash.ali","youtube":"","description":"A software developer","hobbies":"Gym, Music"},{"user_id":2,"first_name":"Beautiful","last_name":"Paria","age":120,"role":"unemployed","nationality":"UK","location":"LDN","soft_skills":"Creativity","hard_skills":"SQL","mobile":"987654321","email":"lili@example.com","linkedin":"lili.Far","youtube":"","description":"looking for job","hobbies":"Music, Photography"},{"user_id":3,"first_name":"X","last_name":"Y","age":128,"role":"Developer","nationality":"Unknown","location":"London","soft_skills":"Communication","hard_skills":"JS","mobile":"123456789","email":"x@example.com","linkedin":"Not specified","youtube":"Not specified","description":"A software developer","hobbies":"None"},{"user_id":4,"first_name":"L","last_name":"YF","age":111,"role":"Software Developer","nationality":"Unknown","location":"LDN","soft_skills":"Creativity","hard_skills":"SQL","mobile":"987654321","email":"l@example.com","linkedin":"Not specified","youtube":"Not specified","description":"looking for job","hobbies":"None"},{"user_id":5,"first_name":"A","last_name":"B","age":30,"role":"Software Engineer","nationality":null,"location":"New York","soft_skills":null,"hard_skills":null,"mobile":null,"email":"ab@example.com","linkedin":null,"youtube":null,"description":"Software Engineer with experience in web development.","hobbies":null}]
    
  return (
    <div className="userContainer">

{allUser.map((user)=>(<UserBox key={user.user_id} userID={user.user_id} firstName={user.first_name} lastName={user.last_name} Role={user.user_id}></UserBox>)

)}


    </div>
  );
}

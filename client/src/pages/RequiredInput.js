import "./../styles/requiredInput.css";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
const userDetailsState = atom({
  key: "registerFormInputsState",
  default: {
    firsName: "",
    lastName: "",
    age:"",
    role: "",
    nationality:"",
    location: "",
    softSkill: "",
    hardSkill: "",
    mobile:"",
    email: "",
    linkedin: "",
    youtube:"",
    description:"",
    hobbies:"",
    submit:false,
    allValid:false,

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
    const allValid = form.allValid;
    const submit= form.submit;


    return {
      firstName,
      lastName,
      email,
      role,
      location,
      age,
      description,
      submit,
      allValid,
    };
  },
});

export default function RequiredInput() {
  const [form, setForm] = useRecoilState(userDetailsState);
  const data = useRecoilValue(dataSelector);
const navigate=useNavigate();



  const submitHandler=(event)=>{
    event.preventDefault();

    setForm({
      ...form,
      submit: true,
    });
    if(data.firstName !==0 && data.lastName !==0 && data.email !==0 && data.age !==0 && data.role !==0 && data.location !==0 && data.description !==0 ){
      setForm({
        ...form,
        allValid: true,
      });
    }

    if(data.allValid){


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



      fetch("https://starter-kit-4v51.onrender.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfos),

      })
      .then((res) => res.json())
      .then((result) => {

        console.log(result);
        navigate("/users");
      });

    }


  };


  return (
    < >

      <form onSubmit={submitHandler} >
        <div className="form"><div className="formContainer">
      <div className="requires" >
          <h2>Requires</h2>

          <div className="inputContainer"><input
          className="input"
          type="text"

          placeholder="firstName"
          onChange={(e) =>
            setForm({
              ...form,
              firsName: e.target.value,
            })
          }
          value={form.firsName}
          />


          {data.submit && data.firstName ===0 &&(
            <p className="error">invalid</p>
          )}</div>

          <div className="inputContainer"><input
          className="input"
          type="text"

          placeholder="lastName"
          onChange={(e) =>
            setForm({
              ...form,
              lastName: e.target.value,
            })
          }
          value={form.lastName}
          />



          {data.submit && data.lastName ===0 &&(
            <p className="error">invalid</p>
          )}</div>





          <div className="inputContainer"><input
          className="input"
          type="text"

          placeholder="age"
          onChange={(e) =>
            setForm({
              ...form,
              age: e.target.value,
            })
          }
          value={form.age}
          />


          {( data.submit &&+data.age < 18 || +data.age > 100) &&(
            <p className="error">invalid</p>
          )}</div>


          <div className="inputContainer">
          <input
          className="input"
          type="text"

          placeholder="role"
          onChange={(e) =>
            setForm({
              ...form,
              role: e.target.value,
            })
          }
          value={form.role}
          />
          {data.submit && data.role ===0 &&(
            <p className="error">invalid</p>
          )}</div>




          <div className="inputContainer">
          <input
          className="input"
          type="text"

          placeholder="location"
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value,
            })
          }
          value={form.location}
          />
          {data.submit && data.location ===0 &&(
            <p className="error">invalid</p>
          )}</div>

          <div className="inputContainer"> <input
          className="input"
          type="text"

          placeholder="email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          value={form.email}
          />{data.submit && data.email ===0 &&(
            <p className="error">invalid</p>
          )}</div>


         <div className="inputContainer"><input
          className="input"
          type="text"

          placeholder="description"
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          value={form.description}
          />


          {data.submit && data.description ===0 &&(
            <p className="error">invalid</p>
          )}</div>











      </div>





      <div className="optional">
          <h2>Optional</h2>
          <input
          className="input"
          type="text"

          placeholder=" nationality"
          onChange={(e) =>
            setForm({
              ...form,
              nationality: e.target.value,
            })
          }
          value={form.nationality}
          />



          <input
          className="input"
          type="text"

          placeholder=" Skill"
          onChange={(e) =>
            setForm({
              ...form,
              hardSkill: e.target.value,
            })
          }
          value={form.hardSkill}
          />


          <input
          className="input"
          type="text"

          placeholder="Skill"
          onChange={(e) =>
            setForm({
              ...form,
              softSkill: e.target.value,
            })
          }
          value={form.softSkill}
          />










          <input
          className="input"
          type="text"

          placeholder="mobile"
          onChange={(e) =>
            setForm({
              ...form,
              mobile: e.target.value,
            })
          }
          value={form.mobile}
          />


          <input
          className="input"
          type="text"

          placeholder="Linkedin"
          onChange={(e) =>
            setForm({
              ...form,
              linkedin: e.target.value,
            })
          }
          value={form.linkedin}
          />
          <input
          className="input"
          type="text"

          placeholder="youtube"
          onChange={(e) =>
            setForm({
              ...form,
              youtube: e.target.value,
            })
          }
          value={form.youtube}
          />
          <input
          className="input"
          type="text"

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





<button className="submitBtn" type="submit"  >
          submit
        </button></div>



      </form>
    </>
  );
}

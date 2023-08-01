import "./../Styles/RequiredInput.css";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const userDetailsState = atom({
  key: "registerFormInputsState",
  default: {
    firsName: "",
    lastName: "",

    role: "",
    location: "",
    softSkill: "",
    hardSkill: "",
    linkedin: "",
    email: "",
  },
});

const dataSelector = selector({
  key: "mobileNumberLength",
  get: ({ get }) => {
    const form = get(userDetailsState);

    const firstname = form.firsName.length;
    const lastname = form.lastName.length;
    const email = form.email.indexOf("@gmail.com");
    const role = form.role;
    const location = form.location;
    const softSkill = form.softSkill;
    const hardSkill = form.hardSkill;
    const linkedin = form.linkedin;

    return {
      firstname,
      lastname,
      email,
      role,
      location,
      softSkill,
      hardSkill,
      linkedin,
    };
  },
});

export default function RequiredInput() {
  const [form, setForm] = useRecoilState(userDetailsState);
  const data = useRecoilValue(dataSelector);



  return (
    <div className="container">
      {" "}
      <form>
        <div className="flex">

          <div className="firstname">
            <input
          className="input"
          type="text"

          placeholder="Enter your firstname"
          onChange={(e) =>
            setForm({
              ...form,
              firsName: e.target.value,
            })
          }
          value={form.firsName}
        />
        {data.firstname > 3 ? (
          <p className="success-message">success</p>
        ) : (
          <p className="error-message">your first name is too short</p>
        )}
            </div>

            <div className="last-name"><input
          className="input"
          type="text"

          placeholder="Enter your lastName"
          onChange={(e) =>
            setForm({
              ...form,
              lastName: e.target.value,
            })
          }
          value={form.lastName}
        />
        {data.lastName > 3 ? (
          <p className="success-message">success</p>
        ) : (
          <p className="error-message">your last name is too short</p>
        )}</div>

        </div>
<div className="flex">
   <input
          className="input"
          type="text"

          placeholder="Enter your role"
          onChange={(e) =>
            setForm({
              ...form,
              role: e.target.value,
            })
          }
          value={form.role}
        />

        <input
          className="input"
          type="text"

          placeholder="Enter your location"
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value,
            })
          }
          value={form.location}
        />
</div>

<div className="flex">
  <div className="hardSkill">
  <input
          className="input"
          type="text"

          placeholder="Enter your hard Skill"
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

          placeholder="Enter your hard Skill"
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

          placeholder="Enter your hard Skill"
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

          placeholder="Enter your hard Skill"
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

          placeholder="Enter your hard Skill"
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

          placeholder="Enter your hard Skill"
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

          placeholder="Enter your hard Skill"
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

          placeholder="Enter your hard Skill"
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

          placeholder="Enter your hard Skill"
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

          placeholder="Enter your hard Skill"
          onChange={(e) =>
            setForm({
              ...form,
              hardSkill: e.target.value,
            })
          }
          value={form.hardSkill}
        />
  </div>

<div className="softSkill">
  <input
          className="input"
          type="text"

          placeholder="Enter your soft Skill"
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

          placeholder="Enter your soft Skill"
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

          placeholder="Enter your soft Skill"
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

          placeholder="Enter your soft Skill"
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

          placeholder="Enter your soft Skill"
          onChange={(e) =>
            setForm({
              ...form,
              softSkill: e.target.value,
            })
          }
          value={form.softSkill}
        />
</div>

</div>



        <div className="flex">


          <input
          className="input"
          type="text"

          placeholder="Enter your Linkedin"
          onChange={(e) =>
            setForm({
              ...form,
              Linkedin: e.target.value,
            })
          }
          value={form.linkedin}
        />
<div className="email">
             <input
          className="input"
          type="text"

          placeholder="Enter your email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          value={form.email}
        />
        {data.email === -1 ? (
          <p className="error-message">your email is wrong</p>
        ) : (
          <p className="success-message">success</p>
        )}
          </div>

        </div>



        <button className="submit-btn" type="submit"  >
          submit
        </button>
      </form>
    </div>
  );
}

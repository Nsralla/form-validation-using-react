import { useState } from "react";

export default function Signup() {

  // Here we will use formData()

  // reset will work by default since I used tpye='reset' on the reset button
  // type:'submit' is the default attribute when the button is inside a form 


  // use built in validation here


  const [passwordsAreEqaul, setPasswordsAreEqaul] = useState(true);
  

  function handleSubmit(event){
    event.preventDefault();

    const fd = new FormData(event.target);
    const checkboxes = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());  // will return array of objects (keys and values)
    data.acquisition = checkboxes;

    if (data.password !== data["confirm-password"]){
        setPasswordsAreEqaul(false);
        return;
    }
    else{
      setPasswordsAreEqaul(true);
    }
      // also to reset the inputs in onther way:
      event.target.reset(); 
      console.log(data);

    // event.target gives you the form

  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          required 
          />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" 
            type="password" 
            name="password"
            required minLength={8}
            />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            minLength={8}
          />
          <div className="control-error">{!passwordsAreEqaul && <p>Passwords must be equal</p>}</div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}

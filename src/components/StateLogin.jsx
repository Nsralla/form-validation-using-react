import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../util/useInput";

export default function StateLogin() {
  // states for the inputs
  // second solution
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // onBlur means the focus is lost
  // third solution

  const {
    value:emailValue,
    handleInput:handleEmail,
    handleInputBlur: handleEmailBlur,
    hasError:emailHasError,
  } = useInput('', (value)=>{
    return isEmail(value) && isNotEmpty(value);
  });
  

  const {
    value: passwordValue,
    handleInput:handlePassword,
    handleInputBlur:handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('',(value)=>hasMinLength(value,6));


  function handleSubmit(event) {
    event.preventDefault(); // prevent submitting the form since we call this function inside a form
    if(emailHasError || passwordHasError){
      return;
    }
    console.log(emailValue);
    console.log(passwordValue);
  }

  // second solution
  // function handleEmail(event) {
  //   setEmail(event.target.value);
  // }

  // function handlePassword(event) {
  //   setPassword(event.target.value);
  // }

  // any button inside form will submit the form by default and send an http request
  // one solution use: type:'button', so it will stop submitting the form
  // second solution use: onSubmit inside the form

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          type="email"
          name="email"
          label="Email"
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmail}
          error={emailHasError && "Please enter a valid email" }
        />

        <Input
          id="password"
          type="password"
          name="password"
          label={"Password"}
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePassword}
          error={passwordHasError && "Please enter a valid password" }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

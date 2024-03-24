import { useRef, useState } from "react";

export default function Login() {

  const [emailIsInValid, setEmailIsInValid] = useState(false);
  
  // use ref
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // prevent submitting the form since we call this function inside a form
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    const emailIsValid = emailRef.current.value.includes('@');

    if(!emailIsValid){
      setEmailIsInValid(true);
      return;
    }
    else{
      setEmailIsInValid(false);
    }
    console.log('Sending http request ....')

    
    // reseting the inputs (not recommended)
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            // type="email"
            name="email"
            ref={emailRef}
          />
          <div className="control-error"> {emailIsInValid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

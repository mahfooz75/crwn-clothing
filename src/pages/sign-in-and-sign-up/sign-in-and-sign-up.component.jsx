import React from "react";

import "./sign-in-and-sign-up.style.scss";
import "../../components/sign-in/sign-in.component";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <div>
      <SignIn />
    </div>
    <div>
      <SignUp />
    </div>
  </div>
);
export default SignInAndSignUpPage;

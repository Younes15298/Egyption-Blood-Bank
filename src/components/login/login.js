import React from "react";
import "./login.css";

// COMPONENTS
import LeftSide from "../form/leftside/leftside";
import RightSide from "../form/rightside/rightside";

function Login() {
  return (
    <div className="form-body ">
      <div className="login">
        <div className="top-padding">
          <div className="card ">
            <div className="row g-0  ">
              {/*------ left side (img)-------- */}
              <LeftSide />
              {/*------ right side (form)-------- */}
              <RightSide isLogIn={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

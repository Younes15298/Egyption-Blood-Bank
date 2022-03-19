import React from "react";
import "./register.css";

// COMPONENTS
import LeftSide from "../form/leftside/leftside";
import RightSide from "../form/rightside/rightside";

function Register() {
  return (
    <div className="form-body ">
      <div className="register">
        <div className="top-padding">
          <div className="card ">
            <div className="row g-0  ">
              {/*------ left side (img)-------- */}
              <LeftSide />
              {/*------ right side (form)-------- */}
              <RightSide isLogIn={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

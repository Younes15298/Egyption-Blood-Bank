import React from "react";
import "./login.css";
function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-body ">
      <div className="login">
        <div className="top-padding">
          <div className="card ">
            <div className="row g-0  ">
              {/*------ left side (img)-------- */}
              <div className="left-side col-lg-4 ">
                <div className="image"></div>
              </div>
              {/*------ right side (form)-------- */}
              <div className="right-side container col-lg-8  ">
                <div className="card-body">
                  <div className="forms">
                    <form action="" method="GET" onSubmit={handleSubmit}>
                      <div className="title">
                        <h1 className="text-center">
                          <i>Welcome back to EBB community</i>
                        </h1>
                        <h5 className="text-center">Login</h5>
                      </div>
                      <div className="inputs-form">
                        {/*--------------------- email & password -------------------*/}
                        <div className="inputs">
                          <div>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                          <div>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        {/*--------------------- Remember me & forget password  -------------------*/}
                        <div className="d-flex all">
                          <div className="d-flex ">
                            <input
                              className="check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="check-label space"
                              for="flexCheckDefault"
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="forgetpass space">
                            <a href="url"> Forget your password</a>
                          </div>
                        </div>
                        {/*---------------------register button -------------------*/}
                        <button type="submit" id="submit" value="Signup">
                          Login
                        </button>
                      </div>
                      {/*--------------------- rout to log in ----------------------- */}
                      <div className="login d-flex">
                        <p>New User? </p>
                        <a href="url"> Signup</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

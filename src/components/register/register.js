import React from "react";
import "./register.css";
function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-body ">
      <div className="register">
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
                          <i>Welcome to EBB community</i>
                        </h1>
                        <h5 className="text-center">sign up for new account</h5>
                      </div>
                      <div className="inputs-form">
                        {/*--------------------- name -------------------*/}
                        <div className="row">
                          <div className="col-lg-6 col-md-12 ">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First name"
                            />
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                        {/*--------------------- username & tel  -------------------*/}
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <input
                              type="text"
                              className="form-control"
                              name="username"
                              placeholder="Username"
                            />
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <input
                              type="tel"
                              className="form-control"
                              name="number"
                              placeholder="Enter Your Number"
                            />
                          </div>
                        </div>
                        {/*--------------------- email & password -------------------*/}
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        {/*--------------------- select blood type -------------------*/}
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <select
                              id="inputState"
                              className="form-control input-type select"
                            >
                              <option selected className="choose">
                                Blood type
                              </option>
                              <option>O-</option>
                              <option>O+</option>
                              <option>A-</option>
                              <option>A+</option>
                              <option>B-</option>
                              <option>B+</option>
                              <option>AB-</option>
                              <option>AB+</option>
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <input
                              type="number"
                              name="age"
                              min="18"
                              max="65"
                              class="form-control"
                              placeholder="Age"
                            />
                          </div>
                        </div>

                        {/*--------------------- Personal ID -------------------*/}

                        <div className=" d-flex ">
                          <label class="form-label uploud">Personal ID</label>
                          <input
                            className="form-control input-type"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        {/*--------------------- select Gender -------------------*/}
                        <div className="gender-radio d-flex">
                          <h6>Gender</h6>
                          <div className="genders d-flex">
                            <div className="form-check  d-flex">
                              <label className="gender-style" for="male">
                                male
                              </label>
                              <input
                                type="radio"
                                id="male"
                                className="gender"
                                name="gender"
                                value="male"
                                checked
                              ></input>
                            </div>
                            <div className="form-check d-flex">
                              <label className="gender-style" for="female">
                                female
                              </label>
                              <input
                                type="radio"
                                id="female"
                                className="gender"
                                name="gender"
                                value="female"
                              />
                            </div>
                          </div>
                        </div>
                        {/*---------------------terms & condition -------------------*/}

                        <div className="form-checkk d-flex">
                          <input
                            className="check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label className="check-label" for="flexCheckDefault">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium iure maiores expedita fuga quia
                            commodi totam tempora, adipisci et explicabo.
                          </label>
                        </div>

                        {/*---------------------register button -------------------*/}
                        <button type="submit" id="submit" value="Signup">
                          Signup
                        </button>
                      </div>
                      {/*--------------------- rout to log in ----------------------- */}
                      <div className="login d-flex">
                        <p>Already have an account </p>
                        <a href="url"> Login</a>
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

export default Register;

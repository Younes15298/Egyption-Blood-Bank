import Input from "./input/input";
import Button from "./button/button";
import Links from "./link/link";

const Form = ({
    isLogIn
}) => {

    return (
        <>
            <form>
                {isLogIn ? <LogIn /> : <Rigester />}
            </form>
        </>
    )
}

const LogIn = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
                        <div className="title">
                        <h1 className="text-center">
                        <i>Welcome back to EBB community</i>
                        </h1>
                        <h5 className="text-center">Login</h5>
                        </div>
                        <div className="inputs-form">
                        <div className="inputs">
                            <Input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            />
                            <Input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            />
                        </div>

                        <div className="d-flex all">
                        <div className="d-flex ">
                            <Input
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
                        <Button onClick={handleSubmit} id="submit" value="Login" />
                        </div>

                        {/*--------------------- rout to log in ----------------------- */}
                        <Links path="/register" paragraph="New User? " link="Signup" />
        </>
    )
}

const Rigester = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
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
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                        {/*--------------------- username & tel  -------------------*/}
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                            />
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <Input
                              type="tel"
                              className="form-control"
                              placeholder="Enter Your Number"
                            />
                          </div>
                        </div>
                        {/*--------------------- email & password -------------------*/}
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <Input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <Input
                              type="password"
                              className="form-control"
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
                            <Input
                              type="number"
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
                              <Input
                                type="radio"
                                id="male"
                                className="gender"
                                value="male"
                                checked
                              />
                            </div>
                            <div className="form-check d-flex">
                              <label className="gender-style" for="female">
                                female
                              </label>
                              <Input
                                type="radio"
                                id="female"
                                className="gender"
                                value="female"
                              />
                            </div>
                          </div>
                        </div>
                        {/*---------------------terms & condition -------------------*/}

                        <div className="form-checkk d-flex">
                          <Input
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
                        <Button onClick={handleSubmit} id="submit" value="Signup" />
                      </div>
                      {/*--------------------- rout to log in ----------------------- */}
                      <Links path="/login" paragraph="Already have an account " link="Login" />
        </>
    )
}

export default Form;
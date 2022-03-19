import Form from "../form";

const RightSide = ({
  isLogIn
}) => {
    return (
        <>
            <div className="right-side container col-lg-8  ">
                <div className="card-body">
                  <div className="forms">
                    <Form isLogIn={isLogIn} />
                  </div>
                </div>
            </div>
        </>
    )
}

export default RightSide;
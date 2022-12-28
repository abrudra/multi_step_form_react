import { Button, TextField } from "@mui/material";
import { multiStepContext } from "./StepContext";
import React, { useContext, useState, useEffect } from "react";

function SignUp() {
  let { setStep, userData, setUserData } = useContext(multiStepContext);
  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    dob: "",
    email: "",
    adress: "",
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    dob: "",
    email: "",
    adress: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (inputValues.fName) {
      errors.fName = "";
    } else {
      errors.fName = "First name is required";
    }
    //last Name validation
    if (inputValues.lName) {
      errors.lName = "";
    } else {
      errors.lName = "Last name is required";
    }

    //DOB validation
    if (inputValues.dob) {
      errors.dob = "";
    } else {
      errors.dob = "Date of birth is required";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (inputValues.email) {
      errors.email = "";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "Email is required";
    }

    // Adress validation
    if (inputValues.adress) {
      errors.adress = "";
    } else {
      errors.adress = "Address is required";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="App">
      <div>
        <img
          className="App-image"
          src="https://images.squarespace-cdn.com/content/v1/5c055f98620b858a898bfcae/1553294659258-914E42360DZYV8Z1S6BL/carousel-blue.gif"
          alt="Registration"
        ></img>
      </div>
      <div className="sign-up">
        <div className="stepper-div"></div>
        <div className="signup-div">
          <div className="stepcount"> Step1/3</div>
          <div className="signfont"> Sign UP</div>
        </div>
        <div className="First-las-div">
          <div className="first" noValidate>
            <label>First Name</label>
            <TextField
              id="outlined-basic"
              size="small"
              name="fName"
              variant="outlined"
              value={userData["firstname"]}
              onChange={(event) =>
                setUserData({ ...userData, firstname: event.target.value })
              }
              onBlur={(e) => handleChange(e)}
            />
            {validation.fName && (
              <p style={{ color: "red" }}>{validation.fName}</p>
            )}
          </div>
          <div className="first">
            <label>Last Name</label>
            <TextField
              id="outlined-basic"
              size="small"
              name="lName"
              variant="outlined"
              value={userData["lastname"]}
              onChange={(event) =>
                setUserData({ ...userData, lastname: event.target.value })
              }
              onBlur={(e) => handleChange(e)}
            />
            {validation.fName && (
              <p style={{ color: "red" }}>{validation.lName}</p>
            )}
          </div>
        </div>
        <div className="date-email-div">
          <div className="first">
            <label> Date of Birth</label>
            <input
              type="date"
              className="date"
              name="dob"
              value={userData["dob"]}
              onChange={(event) =>
                setUserData({ ...userData, dob: event.target.value })
              }
              onBlur={(e) => handleChange(e)}
            />
            {validation.fName && (
              <p style={{ color: "red" }}>{validation.dob}</p>
            )}
          </div>
          <div className="first">
            <label> Email Address</label>
            <TextField
              id="outlined-basic"
              size="small"
              name="email"
              variant="outlined"
              value={userData["email"]}
              onChange={(event) =>
                setUserData({ ...userData, email: event.target.value })
              }
              onBlur={(e) => handleChange(e)}
            />
            {validation.fName && (
              <p style={{ color: "red" }}>{validation.email}</p>
            )}
          </div>
        </div>
        <div className="addres-div">
          <label>Address</label>
          <TextField
            id="outlined-basic"
            size="small"
            variant="outlined"
            name="adress"
            value={userData["adress"]}
            onChange={(event) =>
              setUserData({ ...userData, adress: event.target.value })
            }
            onBlur={(e) => handleChange(e)}
          />
          {validation.adress && (
            <p style={{ color: "red" }}>{validation.adress}</p>
          )}
        </div>
        <div className="btn-signup">
          <Button
            variant="contained"
            type="button"
            size="Medium"
            onClick={() => {
              if (
                userData.firstname &&
                userData.adress &&
                userData.dob &&
                userData.email &&
                userData.lastname
              ) {
                setStep(2);
                //  handleChange(e);
              }
            }}
          >
            Next Step
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;

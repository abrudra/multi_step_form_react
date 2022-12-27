import { Button, TextField } from "@mui/material";
import { multiStepContext } from "./StepContext";
import React, { useContext } from "react";

function SignUp() {
  let { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div className="App">
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
              variant="outlined"
              value={userData["firstname"]}
              onChange={(event) =>
                setUserData({ ...userData, firstname: event.target.value })
              }
            />
          </div>
          <div className="first">
            <label>Last Name</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={userData["lastname"]}
              onChange={(event) =>
                setUserData({ ...userData, lastname: event.target.value })
              }
            />
          </div>
        </div>
        <div className="date-email-div">
          <div className="first">
            <label> Date of Birth</label>
            <input
              type="date"
              className="date"
              value={userData["dob"]}
              onChange={(event) =>
                setUserData({ ...userData, dob: event.target.value })
              }
            ></input>
          </div>
          <div className="first">
            <label> Email Address</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={userData["email"]}
              onChange={(event) =>
                setUserData({ ...userData, email: event.target.value })
              }
            />
          </div>
        </div>
        <div className="addres-div">
          <label>Address</label>
          <TextField
            id="outlined-basic"
            size="small"
            variant="outlined"
            value={userData["adress"]}
            onChange={(event) =>
              setUserData({ ...userData, adress: event.target.value })
            }
          />
        </div>
        <div className="btn-signup">
          <Button variant="contained" size="Medium" onClick={() => setStep(2)}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

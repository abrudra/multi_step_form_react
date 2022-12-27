import { Button, TextField } from "@mui/material";
import React, { useSate, useState } from "react";

function Message() {
    const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        {count === 1 ? (
          <img
            className="App-image"
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Registration"
          />
        ) : (
          <img
            className="App-image"
            src="https://images.unsplash.com/photo-1521931961826-fe48677230a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Registration"
          />
        )}
      </div>
      <div className="sign-up">
        <div className="stepper-div"></div>
        <div className="signup-div">
          <div className="stepcount"> Step{count}/3</div>
          <div className="signfont"> Sign UP</div>
        </div>
        <div className="First-las-div">
          <div className="first">
            <label>First Name</label>
            <TextField id="outlined-basic" size="small" variant="outlined" />
          </div>
          <div className="first">
            <label>Last Name</label>
            <TextField id="outlined-basic" size="small" variant="outlined" />
          </div>
        </div>
        <div className="date-email-div">
          <div className="first">
            <label> Date of Birth</label>
            <input type="date" className="date"></input>
          </div>
          <div className="first">
            <label> Email Address</label>
            <TextField id="outlined-basic" size="small" variant="outlined" />
          </div>
        </div>
        <div className="addres-div">
          <label>Address</label>
          <TextField id="outlined-basic" size="small" variant="outlined" />
        </div>
        <div className="btn-signup">
          <Button
            variant="contained"
            size="Medium"
            onClick={() => setCount(count + 1)}
          >
            Next Step
          </Button>
        </div>
      </div>
      <div className="sign-up"></div>
    </div>
  );
}

export default Message;

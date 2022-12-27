import {
  Button,
  TextField,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { multiStepContext } from "./StepContext";
import React, { useContext } from "react";

function Message() {
  let { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div className="App">
      <div>
        <img
          className="App-image"
          src="https://media.istockphoto.com/id/1354590729/photo/bubble-talk-or-comment-sign-symbol-on-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=pje5u8wr4tVnuiBnXb6UoPreoio9Q-i4Wff-NHgOxrw="
          alt="Registration"
        ></img>
      </div>
      <div className="sign-up">
        <div className="stepper-div"></div>
        <div className="signup-div">
          <div className="stepcount"> Step2/3</div>
          <div className="signfont"> Message</div>
        </div>
        <div className="First-las-div">
          <div className="textfild">
            <label>Message</label>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              value={userData["message1"]}
              onChange={(event) =>
                setUserData({ ...userData, message1: event.target.value })
              }
            />
          </div>
        </div>
        <div className="addres-div">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={userData["choice"]}
              onChange={(event) =>
                setUserData({ ...userData, choice: event.target.value })
              }
            >
              <FormControlLabel
                value="one choice"
                control={<Radio />}
                label="The number one choice"
              />
              <FormControlLabel
                value="two choice"
                control={<Radio />}
                label="The number two choice"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="btn-signup">
          <Button
            variant="contained"
            size="Medium"
            className="back-btn"
            onClick={() => setStep(1)}
            style={{ color: "black", background: "white", border: "" }}
          >
            Back
          </Button>
          <Button variant="contained" size="Medium" onClick={() => setStep(3)}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Message;

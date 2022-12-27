import {
  Button,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { multiStepContext } from "./StepContext";
import React, { useContext } from "react";

function CheckBox() {
  let { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div className="App">
      <div>
        <img
          className="App-image"
          src="https://cdn.shopify.com/app-store/listing_images/06930d7c539e97a61083ab5080ee17b6/icon/CLql0a30lu8CEAE=.jpg"
          alt="Registration"
        ></img>
      </div>
      <div className="sign-up">
        <div className="stepper-div"></div>
        <div className="signup-div">
          <div className="stepcount"> Step3/3</div>
          <div className="signfont">CheckBox</div>
        </div>
        <div className="checkboximage">
          <img
            className="checkboximage1"
            src="https://easydrawingguides.com/wp-content/uploads/2017/04/how-to-draw-a-cartoon-boy-19.png"
          />
          <img
            className="checkboximage1"
            src="https://png.pngtree.com/png-clipart/20220619/original/pngtree-vector-color-cartoon-image-of-a-cute-little-girl-outlines-png-image_8103519.png"
          />
        </div>
        <div className="addres-div">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={userData["choicecheck"]}
              onChange={(event) =>
                setUserData({ ...userData, choicecheck: event.target.value })
              }
            >
              <FormControlLabel
                value="one choice"
                control={<Radio />}
                label="I want to add this option"
              />
              <FormControlLabel
                value="two choice"
                control={<Radio />}
                label="Let me Click on this checkbox and choose some cool stuf"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="btn-signup">
          <Button
            variant="contained"
            size="Medium"
            style={{ color: "black", background: "white", border: "" }}
            onClick={() => setStep(2)}
          >
            Back
          </Button>
          <Button variant="contained" size="Medium" onClick={submitData}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;

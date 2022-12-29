import {
  Button,
  TextField,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { multiStepContext } from "./StepContext";

function Message() {
  let { setStep, userData, setUserData } = useContext(multiStepContext);
  const [inputValues, setInputValue] = useState({
    message: "",
    radio: "",
  });

  const [validation, setValidation] = useState({
    message: "",
    radio: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (inputValues.message.trim()) {
      errors.message = "";
    } else {
      errors.message = "Message is required";
    }
    //last Name validation
    if (inputValues.radio.trim()) {
      errors.radio = "";
    } else {
      errors.radio = "select any one required";
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
        <div className="message-div">
          <div className="textfild">
            <label>Message</label>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              name="message"
              value={userData["message1"]}
              onChange={(event) =>
                setUserData({ ...userData, message1: event.target.value })
              }
              onBlur={(e) => handleChange(e)}
            />
            {validation.message && (
              <p style={{ color: "red" }}>{validation.message}</p>
            )}
          </div>
        </div>
        <div className="radio-div">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="radio"
              value={userData["choice"]}
              onChange={(event) =>
                setUserData({ ...userData, choice: event.target.value })
              }
              onBlur={(e) => handleChange(e)}
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
            {validation.radio && (
              <p style={{ color: "red" }}>{validation.radio}</p>
            )}
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
          <Button
            type="submit"
            variant="contained"
            size="Medium"
            onClick={(e) => {
              if (userData.message1 && userData.choice) {
                setStep(3);
              } else {
                handleChange(e);
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

export default Message;

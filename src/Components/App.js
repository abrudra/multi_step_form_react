import "./App.css";
import SignUp from "./SignUp";
import Message from "./Message";
import CheckBox from "./CheckBox";
import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./StepContext";

function App() {
  let { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <SignUp />;
      case 2:
        return <Message />;
      case 3:
        return <CheckBox />;
    }
  }
  return (
    <div>
      <Stepper className="stepper-div" activeStep={currentStep - 1}>
        <Step>
          <StepLabel>Sign Up</StepLabel>
        </Step>
        <Step>
          <StepLabel>Message</StepLabel>
        </Step>
        <Step>
          <StepLabel>CheckBox</StepLabel>
        </Step>
      </Stepper>
      {showStep(currentStep)}
    </div>
  );
}

export default App;

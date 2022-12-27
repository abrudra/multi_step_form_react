// import { StepContext } from "@mui/material";
import React, { useState} from "react";
import App from "./App";


export const multiStepContext = React.createContext();
let StepContext = () =>{
    let [currentStep,setStep] = useState(1);
    let [userData,setUserData] = useState([])
    let [finalData,setFinalData] = useState([])
    return(
        <div>
                <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>
                    <App />
                </multiStepContext.Provider>
        </div>
    )
}

export default StepContext;

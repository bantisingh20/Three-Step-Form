import React, { useContext } from "react";
import { multistepcount } from "./StepContext";
import { FirstStep } from "./FirstStep";
import {SecondStep} from "./Secondstep"
import {ThirdStep} from "./ThirdStep"
import { Stepper, StepLabel, Step } from "@mui/material";
import DisplayDataList from './FinalDataList'
function DisplayData(){
 
    console.log('call');
    const { currentStep,FinalData } = useContext(multistepcount);
    function ShowStep(steps){
        switch(steps){
            case 0: return <FirstStep/>
            case 1: return <FirstStep/>
            case 2: return <SecondStep/>
            case 3: return <ThirdStep/>
            default :return ''
        }

    }

    


    return(
        <>

        <div className="container col-md-4">
            <h3>3 Step login Form</h3>

           <div className="center-stepper">
                <Stepper activeStep={currentStep - 1 <= 0 ? 0 : currentStep - 1} orientation="horizontal">
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>

                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                </Stepper> 
           </div>
           {ShowStep(currentStep)}
        </div>
        <br/>
        <div className="container col-md-12">
           {FinalData.length > 0 ?  <DisplayDataList /> : ''} 
         </div>
        </>
    )
}

export {DisplayData}
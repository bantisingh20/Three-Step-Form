// import React,{useState} from "react";
// import {DisplayData} from "./MainPageDisplay"

// export const multistepcount = React.createContext();

// const StepContext = () => {
//     const [currentStep,Setstep] = useState(1);
//     const [userData,SetuserData] =useState([]);
//     const [FinalData,SetuserFinalData] =useState([]);
 
//     return(
//     <>
//      <multistepcount.Provider value={{currentStep, Setstep, userData, SetuserData, FinalData, SetuserFinalData}} >  
//          <DisplayData/>
//      </multistepcount.Provider>
//     </>
//  )
// }

// export default StepContext;

import React, { createContext, useState } from 'react';
import { DisplayData } from "./MainPageDisplay";

const multistepcount = createContext();


const StepContext = () => {
    const [currentStep, Setstep] = useState(1);
    const [userData, SetuserData] = useState([]);
    const [FinalData, SetuserFinalData] = useState([]);

    function SubmitFinalData(){
         
        SetuserFinalData(FinalData =>[...FinalData,userData])
        SetuserData('');
        Setstep(1);
         
    }
    return (
        <multistepcount.Provider value={{ currentStep, Setstep, userData, SetuserData, FinalData, SetuserFinalData,SubmitFinalData }}>
            <DisplayData />
        </multistepcount.Provider>
    );
}

export { StepContext, multistepcount };

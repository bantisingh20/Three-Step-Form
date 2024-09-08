import React, { useContext } from "react";
import { Button,TextField } from "@mui/material";
import { multistepcount } from './StepContext';

 function ThirdStep(){

    const { currentStep,Setstep,userData,SetuserData,SubmitFinalData } = useContext(multistepcount);
   return(
    <>

        <div className="container col-md-12">
            <form className="needs-validation" onSubmit={SubmitFinalData }>
                    <div className="form-group">
                        <label form="lblFirstName">UserName </label>
                        <input type="text" className="form-control" required id="txtusername" 
                        value={userData["UserName"]}
                        onChange={(e) => SetuserData({...userData ,"UserName" : e.target.value})} 
                            placeholder="Enter User Name" />
                            <br/>
                    </div>
                    <div className="form-group">
                        <label form="lbllastName">Password</label>
                            <input type="text" className="form-control" id="txtpsd" required 
                            value={userData["Password"]}
                            onChange={(e) => SetuserData({...userData ,"Password" : e.target.value})}
                            placeholder="Enter Password" />
                    </div>
                    <br/> 
                    <div style={{ display:"flex", gap:20 }}>
                        <button type="submit" className="btn btn-success" >Submit</button>
                        <Button variant="contained" color="primary" onClick={()=>Setstep(currentStep -1) }> Previous </Button>
                    </div>
            </form>
        </div>

    {/* <div className="container">
        <div>
            <TextField label="User Name" margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField label="Password" margin="normal" variant="outlined" color="secondary" /> 
        </div>

        
        <Button variant="contained" color="primary" > Submit </Button>
        <Button variant="contained" color="info" onClick={()=>Setstep(currentStep -1) }> Previous </Button>
       

    </div> */}
  

   
        
    </>
   )
}

export {ThirdStep}
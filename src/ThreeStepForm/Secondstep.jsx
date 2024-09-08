import React, { useContext } from "react";
import { Button,TextField } from "@mui/material";
import { multistepcount } from './StepContext';

 function SecondStep(){

    const { currentStep,Setstep,userData,SetuserData } = useContext(multistepcount);
    
   return(
    <>


        <div className="container col-md-12">
            <form className="needs-validation" onSubmit={() =>Setstep(currentStep +1 )}>

                    <div className="form-group">
                        <label form="lblFirstName">Address </label>
                        <input type="text" className="form-control" required 
                            value={userData["Address"]}
                            onChange={(e) => SetuserData({...userData ,"Address" : e.target.value})}
                            id="txtstate" placeholder="Enter Address" />
                            <br/>
                    </div>

                    <div className="form-group">
                        <label form="lblFirstName">State </label>
                        <input type="text" className="form-control" required 
                            value={userData["State"]}
                            onChange={(e) => SetuserData({...userData ,"State" : e.target.value})}
                            id="txtstate" placeholder="Enter State" />
                            <br/>
                    </div>
                    <div className="form-group">
                        <label form="lbllastName">City</label>
                            <input type="text" className="form-control"
                            value={userData["City"]}
                            onChange={(e) => SetuserData({...userData ,"City" : e.target.value})} 
                            id="txtCity" required 
                            placeholder="Enter your city" />
                    </div>

                    <div className="form-group">
                        <label form="lbllastName">Pincode</label>
                            <input type="text" className="form-control"
                            value={userData["Pincode"]}
                            onChange={(e) => SetuserData({...userData ,"Pincode" : e.target.value})} 
                            id="txtCity" required 
                            placeholder="Enter your Pincode" />
                    </div>

                    <br/> 
                    <div style={{ display:"flex", gap:20 }}>
                        <button type="submit" className="btn btn-success">Next</button>
                        <Button variant="contained" color="primary" onClick={()=>Setstep(currentStep -1) }> Previous </Button>
                    </div>
            </form>
        </div>

    {/* <div className="container">
        <div>
            <TextField label="Email Id" margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField label="State" margin="normal" variant="outlined" color="secondary" /> 
        </div>
        <div>
            <TextField label="City" margin="normal" variant="outlined" color="secondary" />
        </div>

        <Button variant="contained" color="primary" onClick={()=>Setstep(currentStep +1 ) }> Next </Button>
        <Button variant="contained" color="info" onClick={()=>Setstep(currentStep -1) }> Previous </Button>

    </div> */}
  

   
        
    </>
   )
}

export {SecondStep}
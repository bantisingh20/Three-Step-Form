import React, { useContext } from "react";
import { Button,TextField } from "@mui/material";
import { multistepcount } from './StepContext';

 function FirstStep(){

    const { Setstep,userData,SetuserData } = useContext(multistepcount);
   return(
    <>

        <div className="container col-md-12">
            <form className="needs-validation" onSubmit={() =>Setstep(2)}>
                    <div className="form-group">
                        <label form="lblFirstName">First Name</label>
                        <input type="text" className="form-control"
                            value={userData["firstName"]}
                            onChange={(e) => SetuserData({...userData ,"firstName" : e.target.value})}
                            required id="txtFirstName"  
                            placeholder="Enter First Name" />
                            <br/>
                    </div>
                    <div className="form-group">
                        <label form="lbllastName">Last Name</label>
                            <input type="text" className="form-control"
                            value={userData["lastName"]}
                            onChange={(e) => SetuserData({...userData ,"lastName" : e.target.value})}
                            id="txtLastName" required placeholder="Enter Last Name" />
                    </div>

                    <div className="form-group">
                        <label form="">Contact No</label>
                            <input type="number" className="form-control"
                            value={userData["ContactNo"]}
                            onChange={(e) => SetuserData({...userData ,"ContactNo" : e.target.value})}
                            id="txtLastName" required placeholder="Enter Mobile Number" />
                    </div>

                    <div className="form-group">
                        <label form="">Email Id</label>
                            <input type="email" className="form-control"
                            value={userData["EmailId"]}
                            onChange={(e) => SetuserData({...userData ,"EmailId" : e.target.value})}
                            id="txtLastName" required placeholder="Enter Email Id" />
                    </div>
                    <br/> 
                 <button type="submit" className="btn btn-success">Next</button>
            </form>
        </div>
    {/* <div className="container">
        <div>
            <TextField label="First Name" margin="normal"  required variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField label="Last Name" margin="normal" variant="outlined" color="secondary" /> 
        </div>
        <div>
            <TextField label="Contact" margin="normal" variant="outlined" color="secondary" />
        </div>

        <Button variant="contained" color="primary" onClick={()=>Setstep(2) }> Next </Button>
    </div>
  

    */}
        
    </>
   )
}

export {FirstStep}
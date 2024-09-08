import React, { useContext } from "react";
import { TableContainer, TableHead,TableRow,TableBody,TableCell,Table } from "@mui/material";
import { multistepcount } from "./StepContext";

export default function DisplayDataList(){
     
    const { FinalData } = useContext(multistepcount);
    console.log('g');
    console.log(FinalData)

    // Log each object in FinalData in a readable format
    FinalData.forEach((data, index) => {
        console.log(`Index: ${index}, Value: ${JSON.stringify(data, null, 2)}`);
    });
    return(
        <>
        <TableContainer>
            <Table style={{border:1 }}>
                <TableHead  style={{backgroundColor :"skyblue" ,fontSize: 'bole'}}>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Contact No</TableCell>
                        <TableCell>Email Id</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Pincode</TableCell>

                    </TableRow>
                </TableHead>

                <TableBody style={{backgroundColor :"grey" ,fontSize: 'bole'}}>
                    {FinalData.map(data =>(
                        <TableRow key={data.EmailId}>
                        <TableCell>{data.firstName}</TableCell>
                        <TableCell>{data.lastName}</TableCell>
                        <TableCell>{data.ContactNo}</TableCell>
                        <TableCell>{data.EmailId}</TableCell>
                        <TableCell>{data.Address}</TableCell>
                        <TableCell>{data.State}</TableCell>
                        <TableCell>{data.City}</TableCell>
                        <TableCell>{data.Pincode}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
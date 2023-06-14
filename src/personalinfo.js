import React from "react";
import Table from 'react-bootstrap/Table';

class personalinfo extends React.Component{
    render(){
        return(
            <>
            
            <h1 style={{textAlign:"center", color: "white", textShadow:"0px 0px 8px yellow"}}>My info</h1>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th style={{textAlign:"center"}} rowSpan={2}>Personal info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{textAlign:"center"}}>Name</td>
          <td style={{textAlign:"center"}}>Suhaib</td>
        </tr>
        <tr>
          <td style={{textAlign:"center"}}>Gender</td>
          <td style={{textAlign:"center"}}>Male</td>
          
        </tr>
        <tr>
          <td style={{textAlign:"center"}}>College</td>
          <td style={{textAlign:"center"}}>LTUC</td>
        </tr>
        <tr>
          <td style={{textAlign:"center"}}>Major</td>
          <td style={{textAlign:"center"}}>Cloud Computting</td>
        </tr>
      </tbody>
    </Table>
            </>
        )
    }
}
export default personalinfo;
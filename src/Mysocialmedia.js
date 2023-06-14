import React from "react";
import Button from 'react-bootstrap/Button';

class mysocialmedia extends React.Component{
    render(){
        return(
            <>
            
            <h1 style={{ textAlign: "center", textShadow:"0px 0px 8px yellow" }}>My social media</h1>
            <p style={{textAlign:"center"}}>
            <Button href="#hi" variant="outline-dark" style={{margin:"1em"}}>My Linked IN</Button>
            <Button variant="outline-dark" style={{margin:"1em"}}>My Email</Button>
            <Button variant="outline-dark" style={{margin:"1em"}}>My Intagram</Button>
            </p>
            </>

        )
    }
}
export default mysocialmedia;
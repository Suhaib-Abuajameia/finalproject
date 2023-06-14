import React from "react";
import Button from 'react-bootstrap/Button';

class dicegame extends React.Component{
    
    dicegame = (e) => {
        let dieNumber1=Math.ceil(Math.random()*6);
        let dieNumber2=Math.ceil(Math.random()*6);
        let sumDieNum=dieNumber1+dieNumber2;
        let rollbtn=document.getElementById("rollbtn");
        let res1=document.getElementById("res1");
        let res2=document.getElementById("res2");

        res1.innerHTML = "<img src='img/die" + dieNumber1 + ".PNG'>";
        res2.innerHTML = "<img src='img/die" + dieNumber2 + ".PNG'>";
        


        
        if (sumDieNum>7){
            let displayres=document.getElementById("displayres");
            displayres.innerText="You won!";
        }
        else {
            let displayres=document.getElementById("displayres");
            displayres.innerText="You lost!";
            rollbtn.disabled=true;
        }
    }

    render() {
        return(
            <>
            
            <h1>Dice Game</h1>
            <span id="res1"></span><span id="res2"></span><br/>
            <Button variant="dark" id="rollbtn" type="button" onClick={this.dicegame} active>Roll Dice</Button>
            <p id="displayres"></p>

            </>
        )
    }
}
export default dicegame;
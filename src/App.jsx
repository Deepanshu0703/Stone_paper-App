import Score from "./Score";
import Play from "./Play";
import React from "react";
import Message from "./Message";
import PlayAgain from "./PlayAgain";
import Modal from "./Modal";

function App() {
    const clas = ["paper", "rock", "scissors"];
    const imag=["icon-paper.svg","icon-rock.svg","icon-scissors.svg","icon-spock.svg"];
    const color=["rgba(245, 29, 29, 0.87)","rgba(247, 247, 30, 0.991)","rgb(60, 178, 241)","rgb(0, 0,0)"];
    const [user, setUser] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const[num,setNum]=React.useState(0);
    const [show, setShow] = React.useState(false);

    function start(props){
        console.log(props.target.alt);
        if(props.target.alt==="icon-paper.svg"){
            setNum2(0);
        }
        else if(props.target.alt==="icon-rock.svg"){
            setNum2(1);
        }
        else if(props.target.alt==="icon-scissors.svg"){
            setNum2(2);
        }


        setUser(1);
        setNum(3);
        setTimeout(function start2(){
            const number=Math.floor(Math.random() * 3)
            setNum(number);
            if(imag[number]===props.target.alt){
                setScore(score + 0);
            }
            else if (props.target.alt === "icon-rock.svg" && imag[number] === "icon-paper.svg") {
                setScore(score - 1);
            }
            else if (props.target.alt === "icon-rock.svg" && imag[number] === "icon-scissors.svg") {
                setScore(score + 1);
            }
            else if (props.target.alt === "icon-paper.svg" && imag[number] === "icon-rock.svg") {
                setScore(score + 1);
            }
            else if (props.target.alt === "icon-paper.svg" && imag[number] === "icon-scissors.svg") {
                setScore(score - 1);
            }
            else if (props.target.alt === "icon-scissors.svg" && imag[number] === "icon-rock.svg") {
                setScore(score - 1);
            }
            else if (props.target.alt === "icon-scissors.svg" && imag[number] === "icon-paper.svg") {
                setScore(score + 1);
            }
        }
    ,2000);
    }
    function startAgain(){
        setUser(0);
    }
    function shower(){
        if(show===false){
            setShow(true);
            const body=document.querySelector("body");
            body.style.backgroundColor="hsl(214, 47%, 23%)";
        }
        else{
            setShow(false);
            const body=document.querySelector("body");
            body.style.backgroundColor="#171333";
        }
        
    }



    return (
            <div>
        
            {user===0?<div > {!show?<div><Score scor={score}/><div className="PlayArea">
                <div className="imag">
                    <img src="./images/bg-triangle.svg" alt="bg-triangle.svg" className="Image4"/>
                    <Play name='icon-paper.svg' color={color[0]} class="Image2" oncli={start}/>
                    <Play name='icon-rock.svg' color={color[1]} class="Image3" oncli={start}/>
                </div>
                <center>
                    <Play name='icon-scissors.svg' color={color[2]}class="Image1" oncli={start}/>
                </center>
            </div> 
            <button className="btn" onClick={shower}>Rules</button>
            </div>:<Modal onc={shower}/>}</div>
             :<div>{!show?<div>
             <Score scor={score}/>
             <Message my={clas[num2]} com={clas[num]}/>
            <div >
                <div className="images">
                    <center><Play color={color[num2]} name={imag[num2]}   class="imge" /></center><PlayAgain onClic={startAgain}/>
                    <center><Play color={color[num]} name={imag[num]} class="imge" /></center>
                </div>
            </div>
            <button className="btn" onClick={shower}>Rules</button></div>:<Modal onc={shower}/>}
            </div>}
            </div>
    );
}
export default App;
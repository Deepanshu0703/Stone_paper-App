import Option from "./Option2";
import { useState } from "react";
import Modal from "./Modal2";
import Logo from "./Logo2";

function Playing2() {
   const [displa, setDispla] = useState("none");
    const [modal, setModal] = useState(false);
    const [plays, setPlays] = useState("");
    const[playStatus,setPlayStatus]=useState("");
    function onClic() {
        modal ? setModal(false) : setModal(true);
    }
    const sty = {
        display: "flex", flexWrap: 'wrap', justifyContent: "space-around"
        , alignItems: "center", width: "93%", padding: '10px', margin: '10px'
    }
    const [status, setStatus] = useState("");
    const [score, setScore] = useState(12);
    const clas = ["rock", "paper", "scissors"];
    function oncli(event) {
        const user = event.target.parentElement.className;
        const all = document.getElementsByClassName("images")[0].children;
        for (let i = 0; i < all.length; i++) {
            if (all[i].className !== user) {
                all[i].style.display = "none";
            }
        }
        setTimeout(() => {

            const comp = clas[Math.floor(Math.random() * 3)];
            const alls = document.getElementsByClassName("images")[0].children;
            for (let i = 0; i < alls.length; i++) {
                if (alls[i].className === comp) {
                    alls[i].style.display = "block";
                }
            }
            setPlays("Play Again")
            setPlayStatus("You picked " + user + " and the computer picked " + comp);
            setDispla("block");
            if (user === comp) {
                setScore(score + 0);
                setStatus("Draw");
                
            }
            else if (user === "rock" && comp === "paper") {
                setScore(score - 1);
                setStatus("You Lose");

            }
            else if (user === "rock" && comp === "scissors") {
                setScore(score + 1);
                setStatus("You Win");
            }
            else if (user === "paper" && comp === "rock") {
                setScore(score + 1);
                setStatus("You Win");
            }
            else if (user === "paper" && comp === "scissors") {
                setScore(score - 1);
                setStatus("You Lose");
            }
            else if (user === "scissors" && comp === "rock") {
                setScore(score - 1);
                setStatus("You Lose");
            }
            else if (user === "scissors" && comp === "paper") {
                setScore(score + 1);
                setStatus("You Win");
            }
            document.getElementsByClassName("playStatus")[0].style.display="block";
            document.getElementsByClassName("play")[0].style.display="block";
        }, 2000);
        
    }
    function starts(){
        const alls = document.getElementsByClassName("images")[0].children;
        for (let i = 0; i < alls.length; i++) {
            alls[i].style.display = "block";
        }
        setPlays("")
        setStatus("");
        setPlayStatus("");

    }
    const imag = "logo.svg";
    return (modal ? <Modal /> :
        <div>
            <Logo scor={score} image={imag} />
            <div>
            <div  className="playStatus" style={{ textAlign: 'center', fontSize: '2rem',fontWeight: 'bold', width:"80%",marginLeft:"10%",padding:"10px",marginRight:"5%",color: 'white'
             }} >{playStatus}</div>
                <div className="images" style={sty}>
                    <div className="rock"><Option class="rock" onCli={oncli} color="hsl(230, 89%, 62%)" /></div>
                    <div className="paper"><Option class="paper" onCli={oncli} color="hsl(349, 71%, 52%)" /></div>
                    <div className="scissors"><Option class="scissors" onCli={oncli} color="hsl(39, 89%, 49%)" /></div>
                </div>
                <div className="status" style={{ textAlign: 'center', fontSize: '2rem',fontWeight: 'bold', color: 'white', margin: '10px' }}>{status}</div>
                <div  onClick={starts} className="play" style={{ textAlign: 'center', fontSize: '2rem',fontWeight: 'bold', color: 'white',width:"30%",marginLeft:"35%",padding :"10px" ,display:{displa} }} >{plays}</div>
            </div>
            <div className="rules" style={{ position: 'relative', bottom: '0', right: '0', top: '90%', left: '1%', padding: '10px', }}>
                <button type="button" onClick={onClic} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{
                    backgroundColor: '#171333', color: 'white', border: '2px solid white', borderRadius: '10px', padding: '10px', fontSize: '1.5rem'
                }}>Rules</button>
            </div>  
        </div>
    );

}
export default Playing2;
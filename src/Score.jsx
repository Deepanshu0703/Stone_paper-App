function Score(props){
    return(
        <div className="score_border">
            <img src='logo.svg' alt="logo" className="logo"/>
            <div className="score">Score<div className="sco">{props.scor}</div></div>
        </div>
    )
}
export default Score;
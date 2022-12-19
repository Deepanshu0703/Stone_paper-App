function Logo2(props){
    const styl = {
        display: "flex", justifyContent: "space-around",
        flexWrap:'wrap'
        , alignItems: "center", width: "95%", padding: '10px', margin: '10px',borderRadius: '10%', border: '3px solid white'}
    
    return(

<div className="logo_Score" style={styl}>
                <div className="logo" >
                    <img src={props.image} alt="logo" />
                </div>
                <div className="score" style={{ padding: "10px", backgroundColor: 'white', color: 'black', margin: '30px', fontSize: '1.5rem' ,borderRadius:"5px" }}>Score
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}> {props.scor}</p></div>
            </div>)}export default Logo2;
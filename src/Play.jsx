function Play(props){
    return(
        <img src={props.name} className={props.class} alt={props.name} onClick={props.oncli} 
        style={{borderColor:props.color}}
        />
    )
}
export default Play;
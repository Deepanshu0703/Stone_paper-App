function Option2(props){
    return(
        <div onClick={props.onCli} className={props.class} style={{
            backgroundColor:'white',
            borderRadius:'50%',
            border:"100px solid" ,
            borderColor:props.color,
        }}>
            <img src={`icon-${props.class}.svg`} 
            style={{
                width:'100px',
                height:'100px',
            }}
            alt={props.class}/>
        </div>
    );
}
export default Option2;
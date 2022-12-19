function Modal2(){
    return(
        <div className="modal" style={{
            position:'absolute',
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
            backgroundColor:'hsl(214, 47%, 23%)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            color:'white',
            lineHeight:'3',
}}>
            <h1>Rules</h1>
            <img src="image-rules.svg" alt="logo" />
        </div>
    );
}
export default Modal2;
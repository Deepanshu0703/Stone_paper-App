function Modal(props){
    return(
        <div className="modal">
            <center><img src="image-rules.svg" alt="rules" className="rules" onClick={props.onc}/></center>
        </div>
    )
}
export default Modal;
function Modal(props){
    return(
        <div className="modal">
            <img src="image-rules.svg" alt="rules" className="rules" />
            <img className="ab2" alt="cancel" src="./images/icon-close.svg" onClick={props.onc}/>
        </div>
    )
}
export default Modal;
import {Fragment} from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Buttons from './Buttons';
import successBtn from '../UI/Buttons.module.css';
import Card from './Card';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <Buttons className={successBtn['success-button']} onClick={props.onClose}>Close</Buttons>
        </footer>
    </Card>
}

const Modal = props => {
    const backdrop = document.getElementById('backdrop');
    const modal = document.getElementById('modal');
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, backdrop)}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClose={props.onClose}/>, modal)}
        </Fragment>
     );
}
 
export default Modal;
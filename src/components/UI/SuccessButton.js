import classes from './SuccessButton.module.css';

const SuccessButton = props => {
    return ( 
        <button type={props.type || "button"} className={classes.button}>{props.children}</button>
     );
}
 
export default SuccessButton;
import {useState} from 'react';
import Input from '../UI/Input';
import Buttons from '../UI/Buttons';
import classes from './UserInput.module.css';
import successBtn from '../UI/Buttons.module.css';

const UserInput = props => {
    const [todo, setTodo] = useState();

    const todoChangeHandler = e => {
        setTodo(e.target.value);
    }

    const todoHandler = e => {
        e.preventDefault();

        props.onAddTodo(todo);
    }

    return ( 
        <form onSubmit={todoHandler} className={classes.form}>
            <Input type="text" placeholder="add item..." onChange={todoChangeHandler}/>
            <Buttons type="submit" className={successBtn['success-button']}>Add item</Buttons>
        </form>
     );
}
 
export default UserInput;
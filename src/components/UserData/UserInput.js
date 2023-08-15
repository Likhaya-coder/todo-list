import {useState} from 'react';
import Input from '../UI/Input';
import SuccessButton from '../UI/SuccessButton';
import classes from './UserInput.module.css';

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
            <SuccessButton type="submit">Add item</SuccessButton>
        </form>
     );
}
 
export default UserInput;
import {Fragment, useState} from 'react';
import Input from '../UI/Input';
import Buttons from '../UI/Buttons';
import classes from './UserInput.module.css';
import successBtn from '../UI/Buttons.module.css';
import Modal from '../UI/Modal';

const UserInput = props => {
    const [todo, setTodo] = useState();
    const [error, setError] = useState(null);

    const todoChangeHandler = e => {
        setTodo(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();

        

        if (todo.trim().length < 20) {
            setError({
                title: "Please enter a valid task",
                message: "The task that you provided is not valid ('note' it should be longer than 20 charecters)",
            });
            return;
        }
        setTodo('');
        props.onAddTodo(todo);
    }

    const modalCloseHandler = () => {
        setError(null);
    }

    return ( 
        <Fragment>
            {error && <Modal onClose={modalCloseHandler} title={error.title} message={error.message}/>}
            <form onSubmit={submitHandler} className={classes.form}>
                <Input value={todo} type="text" placeholder="add item..." onChange={todoChangeHandler}/>
                <Buttons type="submit" className={successBtn['success-button']}>Add item</Buttons>
            </form>
        </Fragment>
     );
}
 
export default UserInput;
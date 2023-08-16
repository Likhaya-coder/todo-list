import {Fragment, useState} from 'react';
import Input from '../UI/Input';
import Buttons from '../UI/Buttons';
import successBtn from '../UI/Buttons.module.css';
import Modal from '../UI/Modal';
import Card from '../UI/Card';

const UserInput = props => {
    const [todo, setTodo] = useState();
    const [error, setError] = useState(null);

    const todoChangeHandler = e => {
        setTodo(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();

        

        if (todo.trim().length < 15) {
            setError({
                title: "Please enter a valid task",
                message: "The task that you provided is not valid ('note' it should at least be 15 charecters)",
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
        <Card>
            {error && <Modal onClose={modalCloseHandler} title={error.title} message={error.message}/>}
            <form onSubmit={submitHandler}>
                <Input value={todo} type="text" placeholder="add task..." onChange={todoChangeHandler}/>
                <Buttons type="submit" className={successBtn['success-button']}>Add</Buttons>
            </form>
        </Card>
     );
}
 
export default UserInput;
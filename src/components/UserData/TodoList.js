import Buttons from "../UI/Buttons";
import classes from './TodoList.module.css';
import dangerBtn from '../UI/Buttons.module.css';

const TodoList = props => {
    return ( 
        <ul className={classes['todos-wrapper']}>
            {props.userItec.map(userItem => (
                <li key={userItem.id}>
                    <p>{userItem.input}</p>
                    <Buttons className={dangerBtn['danger-button']}>Delete</Buttons>
                </li>
            ))}
        </ul>
     );
}
 
export default TodoList;
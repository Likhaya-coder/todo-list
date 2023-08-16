import Buttons from "../UI/Buttons";
import classes from './TodoList.module.css';
import dangerBtn from '../UI/Buttons.module.css';
import Card from "../UI/Card";

const TodoList = props => {
    return ( 
        <Card>
            <ul className={classes['todos-wrapper']}>
                {props.userItems.map(userItem => (
                    <li key={userItem.id}>
                        <p>{userItem.input}</p>
                        <Buttons onClick={() => props.onDelete(userItem.id)} className={dangerBtn['danger-button']}>Delete</Buttons>
                    </li>
                ))}
            </ul>
        </Card>
     );
}
 
export default TodoList;
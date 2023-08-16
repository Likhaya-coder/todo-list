import { useState, Fragment } from "react";
import Header from "./components/UI/Header";
import UserInput from "./components/UserData/UserInput";
import TodoList from './components/UserData/TodoList';

function App() {
  const [userItems, setUserItem] = useState([]);

  const addTodoHandler = todo => {
    setUserItem(prevState => {
      return [...prevState, {input: todo, id: Math.random().toString()}];
    });
  }

  const deleteHandler = itemID => {
    const newItemList = userItems.filter(userItem => {
      return userItem.id !== itemID;
    });
    setUserItem(newItemList);
  }

  return (
    <Fragment>
      <Header />
      <UserInput onAddTodo={addTodoHandler}/>
      <TodoList userItems={userItems} onDelete={deleteHandler}/>
    </Fragment>
  );
}

export default App;

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

  return (
    <Fragment>
      <Header />
      <UserInput onAddTodo={addTodoHandler}/>
      <TodoList userItec={userItems}/>
    </Fragment>
  );
}

export default App;

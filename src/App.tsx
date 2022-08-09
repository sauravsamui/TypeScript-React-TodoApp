import React, { useEffect, useState } from 'react';
import './App.css';
import {FaBeer} from "react-icons/fa"
import Button from './component/Button';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import { getTodos, postTodo, Todo } from './action';

function App() {
  const [todos,setTodos] = useState<Todo[]>([])
let handleAdd =(value:string)=>{
  postTodo({
    value,
    isCompleted:false,
   
  }).then((newTodo)=>setTodos([...todos,newTodo]))
}
useEffect(() => {
getTodos().then((d)=>setTodos(d))

  return () => {
  
  }
}, [])


  return (
    <div className="App">
      <div> <Button color="red" leftIcon={<FaBeer/>} rightIcon={<FaBeer/>}>Hello</Button></div>
      {/* <div> <Button color="green" leftIcon={<FaBeer/>} >Hello</Button></div>
      <div> <Button color="grey"  rightIcon={<FaBeer/>}>Hello</Button></div>
      <div> <Button color="blue">Hello</Button></div> */}
      <TodoInput handleAdd={handleAdd}/>
       <TodoList data={todos}/>

    </div>
  );
}

export default App;

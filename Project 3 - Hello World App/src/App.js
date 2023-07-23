// import logo from './logo.svg';
// import './App.css';

import React, {useState, useRef, useEffect} from 'react';
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  
  return (
    <>
    <div style={{fontSize:'20px'}}> 
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
    <div class="form-group">
      <input ref = {todoNameRef} type="text" placeholder="Enter Todo Items" class="input-lg"/> &nbsp;
      <button onClick={handleAddTodo} class="btn btn-primary">Add Todo</button> &nbsp;
      <button onClick={handleClearTodos} class="btn btn-danger">Clear Complete</button>
    </div>
    <div style={{fontSize:'18px'}}>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;

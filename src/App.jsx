import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from './components/Form'

import TodoList from "./components/TodoList"

import { useState } from "react"

const App = () => {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  return (
    <div className='App'>
        <Header />
        <Form 
          todo={todo} 
          setTodo={setTodo} 
          todoList={todoList} 
          setTodoList={setTodoList} 
        />
        <TodoList setTodoList={setTodoList} todoList={todoList}/>

        {/* <Footer /> */}
    </div>
  )
}

export default App

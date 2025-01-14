import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {


  return (
      <div className='todo-container'>
        <h1>Todo List!!</h1>
        <AddTodo />
        <TodoList />
      </div>
  )
}

export default App

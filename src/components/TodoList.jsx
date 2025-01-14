import React, { useEffect } from 'react';
import useTodoStore from '../store/todoStore';
import TodoItem from './TodoItem';


export default function TodoList () {
  const todoList = useTodoStore((state) => state.todoList)
  const { fetchTodo } = useTodoStore()

  useEffect(() => {
    fetchTodo()
  }, [fetchTodo])
  return (
    <ul className='todo-Listbox'>
      {
        todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }
    </ul>
  );
}
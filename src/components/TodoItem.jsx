import React, { useState } from 'react';
import useTodoStore from '../store/todoStore';


export default function TodoItem ({todo}) {
  const { removeTodo, updateTodo } = useTodoStore();
  const [todoEditing, setTodoEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setTodoEditing(false)
  }

  return (
    <li>
    {todoEditing ? 
    <div className='input-box'>
      <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <div className='btn-box'>
          <button onClick={handleUpdate}>저장</button>
          <button onClick={() => setTodoEditing(false)}>취소</button>
      </div>
    </div> :
    <div className='input-box'>
      <span>{todo.text}</span>
      <div className='btn-box'>
        <button onClick={() => setTodoEditing(true)}>수정</button>
        <button onClick={() => removeTodo(todo.id)}>삭제</button>
      </div>
      </div>
    }
    </li>
  );
}
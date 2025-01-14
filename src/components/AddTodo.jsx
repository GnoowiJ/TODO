import React, { useState } from "react";
import useTodoStore from "../store/todoStore";

export default function AddTodo() {
    const [text, setText] = useState('')
    const addTodo = useTodoStore((state) => state.addTodo)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if(!text.trim()) return
      addTodo(text)
      setText("")
    }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="해야 할 일을 입력하세요"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">할 일 추가!</button>
    </form>
  );
}

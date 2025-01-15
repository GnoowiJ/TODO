import { create } from "zustand";
import axios from "axios";

const useTodoStore = create((set) => ({
  todoList:[],

  fetchTodo: async () => {
    try{
      const reponse = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=0');
      set({ todoList : reponse.data});
    } catch(error){
      console.log(error)
    }
  },
  addTodo:(text) => 
    set((state) => ({
      todoList: [...state.todoList, { id: Date.now(), text}]
    })),
  removeTodo: (id) => 
    set((state) => ({ todoList: state.todoList.filter((e) => e.id !== id)})),
  updateTodo: (id, newText) => 
    set((state) => ({
      todoList: state.todoList.map((todo) => 
        todo.id === id ? {...todo, text: newText} : todo
      )
    }))
}))

export default useTodoStore;
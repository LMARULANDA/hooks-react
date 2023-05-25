import React, { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [
    /*
    {
      id: new Date().getTime(),
      description: "recolectar la piedra del alma",
      done: false,
    },
    */
  ];
  
  //onDeleteTodo emita esa id.
  
  const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
  }

export const useTodos = () => {

    
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])
  
 
  const handleNewTodo = (todo) => {
    const action = {
      type:'[TODO] add todo',
      payload: todo,
    }
    dispatch(action);
  }

  const handleDeleteTodo = (id) => {
    console.log(id);
    dispatch({
      type:'[TODO] remove todo',
      payload: id,
    })
  }

  const handleToggleTodo = (id) => {
    console.log(id);
    dispatch({
      type:'[TODO] toggle todo',
      payload: id,
    })
  }
  // se le manda la accion al reducer a travez del dispatch


  return {
    todos,
    todosCount:todos.length,
    pendingTodosCount:todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo
}
}

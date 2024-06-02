import React, { useState } from 'react';
import './App.css';
import Todoitem from './components/Todoitem';
import Inputitem from './components/Inputitem';

function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [warn, setWarn] = useState(false);

  const handleChange = (event) => {
    setItem(event.target.value);
  }

  const handleClick = () => {
    const len = todos.length;
    if(item==="") {
      setWarn(true);
    }
    else {
      setTodos([...todos, {id: len===0? 1: todos[len-1].id+1 , title: item, completed:false}])
      setItem("");
    }
  }

  const handleMark = (id) => {
    const newList = todos.map((todo) => {
      if(todo.id===id) {
        console.log(todo.id,"   ",id);
        return {...todo, completed:!todo.completed}
      } else {
        return todo;
      }
    })
    setTodos(newList);
  }

  const handleDelete = (todo) => {
    setTodos(todos.filter((tod) => {
      return tod.id!==todo.id;
    }))
  }

  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>Todo List</h1>
        <br />
      
        <Inputitem 
          handleChange={handleChange}
          handleClick={handleClick}
          item={item}
          warn={warn}
          setWarn={setWarn}
        />

        <ul>
          {
            todos.length === 0? "No Todos. Please add a Todo":
            todos.map((todo, id)=> {
              return (
                <Todoitem 
                  key={id}
                  todo={todo} 
                  handleDelete={handleDelete}
                  handleMark={handleMark}
                />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App;
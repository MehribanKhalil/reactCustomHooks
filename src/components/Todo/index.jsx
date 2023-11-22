import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const Todo = () => {
//   const [todo, setTodo] = useState(
//     localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
//   );

//   useEffect(()=>{
//     localStorage.setItem("todo",JSON.stringify(todo))
//   },[todo])

//   function addTodo(){
//     setTodo([...todo,"salam"])
//   }


const [todo,addTodo]=useLocalStorage()

  return( 
  
  <div>

    <button onClick={addTodo}>+</button>
    <div>
        {
            todo.map((item)=>(
                <li>{item}</li>
            ))

           
        }
    </div>
  </div>

)};

export default Todo;

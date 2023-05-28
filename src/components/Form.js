import React from 'react'

const Form = ({setInputText,todos,setTodos,inputText})=> {
  const inputTextHandler=(e)=>{
   
    setInputText(e.target.value)
  };
  const submitTodo=(e)=>{
    e.preventDefault();
    setTodos([
      ...todos,
      {text:inputText,completed:false, id:Math.random()*1000}
    ]);
    setInputText("");
  };
  
  return (
    <div>
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder='Add a new task..' />
      <button onClick={submitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      
    </form>
    </div>
  )
}
export default Form;
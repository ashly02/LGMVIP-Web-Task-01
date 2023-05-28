import React ,{useState} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';
import logo from './check-list.png'
function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([])

  return (
    <div className="App">
      <header>TO-DO LIST
      <img src={logo} alt="" className='image'/>
      </header>
      <div className='list-container'>
      <Form 
      inputText={inputText}
       todos={todos}
        setTodos={setTodos}
         setInputText={setInputText}
         
         />
      <TodoList setTodos={setTodos} todos={todos}/>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import Input from './components/Input';
import Todo from './components/Todo';
import axios from 'axios'

function App() {
  const [todo, setTodo] = React.useState([])
  const [remove, setRemove] = React.useState('')
  const [update, setUpdate] = React.useState('')

  React.useEffect(() => {
    async function getData () {
         const todoData = await axios.get(`http://localhost:3002/todo`)
         setTodo(todoData.data)
     }
     getData()
 }, [remove, update])

  return (
    <div className="App">
        <div className="container">
          <Input todo = {todo} setUpdate={setUpdate}/>
          {todo.map((todo, index) => {
            return(
              <Todo text={todo.todo} count={index} id={todo.id} setRemove ={setRemove}/>
            )
          })}
        </div>
    </div>
  );
}

export default App;

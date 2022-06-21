import axios from 'axios'
import React from 'react'

export default function Input({setUpdate, todo}) {

const [value, setValue] = React.useState('')

const getValue = async () => {
  if(value === ""){
    return alert('value empty please write some text')
  }else{


 if (todo.find(item => item.todo === value)) {
  alert("This list already has been written. Please try another one.")
 } else {
  await axios.post(`http://localhost:3002/todo`, {
    todo:value
})
 }
}
    setUpdate(value)
    setValue("")
}

const onEnterValue = (e) => {
  if(e.code === 'Enter') {
    getValue()
  }
}

  return (
    <div className='input'>
        <h1>Todo List</h1>
        <input onKeyDown={(e) => onEnterValue(e)} onInput={(e) => setValue(e.target.value)}  value={value} placeholder='todo list' />
        <input onClick={() => getValue()} type="button" value="add" />
    </div>
  )
}

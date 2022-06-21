import React from 'react'
import axios from 'axios'

export default function Todo({ text, id, count, setRemove }) {
    const [change, setChange] = React.useState(false)
    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:3002/todo/${id}`)
        setRemove(id)
    }
    return (

        <div className='todo_list'>

            <div className="todo" key={id}>
                <div >
                    <h1> <strong>{count + 1}</strong></h1>
                    <img onClick={() => setChange(!change)} src={change ? "tick.png" : "square.png"} alt="" />
                </div>
                <p style={change ? {textDecoration: "line-through", color: "red"} : {textDecoration: "none", color: "#000"}}>{text}</p>
                <button className='delete' onClick={() => deleteTodo(id)}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png" alt="" />
                </button>
            </div>

        </div>
    )
}

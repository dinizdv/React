import React, {useState} from 'react'
import '../styles.css'

// useState -> add state to a functional component

function App(){

    // [(1) state ; (2) function that will update]
    const [tasks, setTasks] = useState([
        'Pay the electricity bill', // default value
        'Take the course' 
    ])


    const [input, setInput] = useState('')

    function handleAdd(){
        setTasks([...tasks, input])
        setInput('') // cleaning the input 
    }

    return(
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task}>{task}</li>
                ))}
            </ul>

            <input type="text" value={input} onChange={e => setInput(e.target.value)}></input>
            <button type="button" onClick={handleAdd}>Add task</button>
        </div>
    )
}

export default App
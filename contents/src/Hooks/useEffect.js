import React, {useState, useEffect} from 'react'
import '../styles.css'

// useState -> adds state to a functional component
// useEffect -> handles side effects in functional components

function App(){

    // [(1) state ; (2) function that will update]
    const [tasks, setTasks] = useState([]) // state with empty array

    const [input, setInput] = useState('')

    // tasks saved in localStorage become the initial state
    useEffect(() => {
        const tasksStorage = localStorage.getItem('tasks') // getting from localStorage
        if (tasksStorage){ // if there is 'tasksStorage'
            setTasks(JSON.parse(tasksStorage)) // JSON.parse -> converts (JSON to object)
        }
    }, []) // [] -> will only be done once

    // (1) function; (2) array
    // when the states change. The changes are saved in localStorage
    useEffect(() => {
        // whenever 'tasks' suffers changes
        // JSON.stringify -> object in JSON string
        // 'tasks' -> key
        localStorage.setItem('tasks', JSON.stringify(tasks)) // sending to localStorage
    }, [tasks])


    function handleAdd(){
        setTasks([...tasks, input])
        setInput('') // clearing the input field 
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

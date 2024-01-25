import React, {useState, useEffect, useMemo, useCallback} from 'react'
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

    // remembers the value, without having to render return more than 1 time
    // it’s no longer about function.
    const handleAdd = useCallback(() =>{ // useCallback
        setTasks([...tasks, input])
        setInput('') // clearing the input field 
    }, [tasks, input])

    // useMemo -> memorizes the value, without having to render return more than 1 time memorizes the value, without having to render return more than 1 time
    const totalTasks = useMemo(() => tasks.length, [tasks])
    
    
    return(
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task}>{task}</li>
                ))}
            </ul>

            <input type="text" value={input} onChange={e => setInput(e.target.value)}></input>
            <button type="button" onClick={handleAdd}>Add task</button>
            <p>Você tem {totalTasks} tarefas!</p>
        </div>
    )
}

export default App

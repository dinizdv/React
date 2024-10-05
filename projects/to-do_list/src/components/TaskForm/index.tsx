import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import '../../styles/taskForm.css'

import { ITask } from '../../interfaces/task' // id, title

interface Props {
    btnText: string,
    taskList: ITask[],
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> // function => receiving []current state
    // ?: => optional
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')

  // form
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // floor => rounds down;
    const id = Math.floor(Math.random() * 10000000)
    const newTask: ITask = {id, title} // create a new object with current data (useState)
    setTaskList!([...taskList, newTask]) // joining tasks (current + preexisting) in unique array 
    // '!' => says to TS: sure the object will come (will not be 'undefined')

    setTitle('') // cleaning field
    console.log(taskList)
  }
  
  // input value
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title'){
      setTitle(e.target.value)
    } 

    console.log(title)
  }

    return (
      <form action="" onSubmit={addTaskHandler} className="form-content">
        <div className="container-elements">
        <h2>Register your task</h2>
          <label htmlFor="" className="label-content">Title:</label>
          <input type="text" name='title' placeholder='Task title' value={title} className="input-content" onChange={handleChange} />
        <input type="submit" className="btn-submit" value={btnText}></input>
        </div>
      </form>
    )
}

export default TaskForm
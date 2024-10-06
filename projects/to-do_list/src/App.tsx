import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './styles/app.css'

import { ITask } from './interfaces/task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  return (
    <div className='container'>
    <Header />
    <div className="container-content">
    <TaskForm btnText={'Register your task'} taskList={taskList} setTaskList={setTaskList} />
    <TaskList taskList={taskList} handleDelete={deleteTask} />
    </div>
    </div>
  )
}

export default App

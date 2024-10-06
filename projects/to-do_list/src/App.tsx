import { useState } from 'react'
import Modal from './components/Modal'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './styles/app.css'

import { ITask } from './interfaces/task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')
    if (display) {
      modal!.classList.remove('hide') // display modal
    } else {
      modal!.classList.add('hide') // close modal
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string) => {
    const updatedTask: ITask = {id, title}

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task // current id task === id task of the looping
    })

    setTaskList(updatedItems)
    hideOrShowModal(false)
  }

  return (
    <div className='container'>
      <Modal children={<TaskForm btnText='Edit task' taskList={taskList} task={taskToUpdate}handleUpdate={updateTask} />} />
    <Header />
    <div className="container-content">
    <TaskForm btnText={'Register your task'} taskList={taskList} setTaskList={setTaskList} />
    <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
    </div>
    </div>
  )
}

export default App

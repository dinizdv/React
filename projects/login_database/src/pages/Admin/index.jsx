import { useState } from 'react'
import './admin.css'
import { auth } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'

export default function Admin(){
  const [taskInput, setTaskInput] = useState('')

  function handleRegister(e){
    e.preventDefault()
    alert("Oi")
  }

  async function handleLogout(){
    await signOut(auth)
  }

  return(
    <div className="admin-container">
      <h1>My tasks</h1>
      <form className="form" onSubmit={handleRegister}>
        <textarea placeholder="Type your task..." value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>

        <button className="btn-register" type="submit">Register task</button>
      </form>

      <article className="list">
        <p>Javascript and react today</p>

        <div>
          <button className="btn-edit">Edit task</button>
          <button className="btn-delete">Complete task</button>
        </div>
      </article>
      
      <div className="container-btn">
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
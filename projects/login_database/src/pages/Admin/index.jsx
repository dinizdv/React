import { useState, useEffect } from 'react'
import './admin.css'
import { auth, db } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import { 
  addDoc, 
  collection,
  onSnapshot, // real time db
  query, // 
  orderBy, // desc or ask
  where,
  doc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function Admin(){
  const [taskInput, setTaskInput] = useState('')
  const [user, setUser] = useState({})
  const [edit, setEdit] = useState({})
  const [tasks, setTasks] = useState([])

    useEffect(() => {
      async function loadTasks(){
      const userDetail = localStorage.getItem("@detailUser") // localStorage key
      setUser(JSON.parse(userDetail)) // data: uid, email
  
      if (userDetail){
        const data = JSON.parse(userDetail)

        const taskRef = collection(db, "tasks") // tasks collection
        const q = query(taskRef, orderBy("created", "desc"), where("userUid", "==", data?.uid))
        // created (date), descending
        // where => login user == login user db

          const unsub = onSnapshot(q,(snapshot) => {
            // snapshot = each document of the 'tasks' collection
            let list = []

            snapshot.forEach((doc) => {
              list.push({
                id: doc.id,
                task: doc.data().task,
                userUid: doc.data().userUid
              })
            })

            console.log(list)
            setTasks(list)
            
        })
      }

    }
  
      loadTasks()
    }, [])

    async function handleRegister(e){
    e.preventDefault()
    
    // blank fields
    if (taskInput === ''){
      toast.error('Type your task...')
      return
  }

  // update task
  if (edit?.id){
    handleUpdateTask()    
    return
  }

  await addDoc(collection(db, "tasks"), {
    task: taskInput, // textarea value
    created: new Date(), 
    userUid: user?.uid // ? prevent crashing (because returns '')
  })
  .then(() => {
    toast.success('Task registered successfully.')
    setTaskInput('') // cleaning textarea
  })
  .catch((error) => {
    console.log(`Error: ${error}`)
  })

  }

  // logout
  async function handleLogout(){
    await signOut(auth)
  }

  // delete task
  async function deleteTask(id){
    const docRef = doc(db, "tasks", id) // doc id
      toast.info('Task deleted.')
      await deleteDoc(docRef) // delete doc id
  }

  // edit task
  function editTask(item){
    setTaskInput(item.task) // clicked = task text to textarea
    setEdit(item)
  }

  async function handleUpdateTask(){
    const docRef = doc(db, "tasks", edit?.id)
    await updateDoc(docRef, {
      task: taskInput
    })
    .then(() => {
      toast.success('Task update')
      setTaskInput('') // cleaning textarea
      setEdit({}) // if not editing task
    })
    .catch((error) => {
      toast.error(`Error when updating: ${error}`)
      setTaskInput('') // cleaning textarea
      setEdit({}) // if not editing task
    })
  }

  return(
    <div className="admin-container">
      <h1>My tasks</h1>
      <form className="form" onSubmit={handleRegister}>
        <textarea placeholder="Type your task..." value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>

        {Object.keys(edit).length > 0 ?(
          <button className="btn-register" id="btn-editTask" type="submit">Edit task</button> // button was clicked
        ) : (
          <button className="btn-register" type="submit">Register task</button>
        )}
      </form>

      {tasks.map((item) => (
          <article key={item.id} className="list">
            <p>{item.task}</p>
            <div>
              <button onClick={ () => editTask(item) } className="btn-edit">Edit task</button>
              <button onClick={ () => deleteTask(item.id) } className="btn-delete">Complete task</button>
            </div>
          </article>
      ))}
      
      <div className="container-btn">
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

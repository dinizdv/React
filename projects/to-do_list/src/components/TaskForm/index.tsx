import '../../styles/taskForm.css'

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
    return (
      <form action="" className="form-content">
        <div className="container-elements">
        <h2>Register your task</h2>
          <label htmlFor="" className="label-content">Title:</label>
          <input type="text" placeholder='Task title' className="input-content" />
        <input type="submit" className="btn-submit" value={btnText}></input>
        </div>
      </form>
    )
}

export default TaskForm
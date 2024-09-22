import '../../styles/taskList.css'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const TaskForm = () => {
    return (
        <div className='container-taskList'>
            <h2>Your tasks:</h2>
            <div className="container-tasks">
                <div className="task">
                <h3>Task one</h3>
                <div className="container-icons-task">
                    <FaEdit className='icon-task icon-edit'/>
                    <FaTrashAlt className='icon-task icon-delete' />
                </div>
                </div>
                <div className="task">
                <h3>Task one</h3>
                <div className="container-icons-task">
                    <FaEdit className='icon-task icon-edit'/>
                    <FaTrashAlt className='icon-task icon-delete' />
                </div>
                </div>
            </div>

        </div>
    )
}

export default TaskForm
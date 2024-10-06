import '../../styles/taskList.css'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import { ITask } from '../../interfaces/task';

interface Props {
    taskList: ITask[]
    handleDelete(id: number): void
    handleEdit(task: ITask): void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
    return (
        <div className='container-taskList'>
            {taskList.length > 0 ? (
                <>
                    <h2>Your tasks:</h2>
                    {taskList.map((task) => (
                        <div key={task.id} className="container-tasks">
                            <div className="task">
                                <h3>{task.title}</h3>
                                <div className="container-icons-task">
                                    <FaEdit className='icon-task icon-edit'
                                        onClick={() => {
                                            handleEdit(task)
                                        }}
                                    />
                                    <FaTrashAlt className='icon-task icon-delete'
                                        onClick={() => {
                                            handleDelete(task.id) // () => {} -> renders by click, not by HTML
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <p className='no-tasks'>No tasks yet...</p>
            )}
        </div>
    );
};

export default TaskList
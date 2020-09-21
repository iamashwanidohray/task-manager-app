import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'

const Task = (props) => {

    const {deleteTask,findTask} = useContext(TaskListContext)
    const task = props.task;
    return (
        <li className="list-item">
            <span>{task.description}</span>
            <div>
                <button className="btn-delete task-btn" onClick={() => deleteTask(task.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button className="btn-edit task-btn" onClick={() => findTask(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
                
            </div>
        </li>
    )
}

export default Task

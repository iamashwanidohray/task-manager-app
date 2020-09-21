import React, {useContext, useState, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext'

const TaskForm = () => {

    const {addTask,clearTasks,editItem,updateTask} = useContext(TaskListContext)
    const [title,setTitle] = useState('')
    
    useEffect(() => {
        if(editItem) {
            setTitle(editItem.description)
        } else {
            setTitle('')
        }
    },[editItem])



    const onSubmitEvent = (event) => {
        event.preventDefault();
        if(editItem) {
            updateTask(editItem.id,title)
        } else {
            addTask(title);
        }
        setTitle('');
    }

    return (
        <form className="form" onSubmit={onSubmitEvent}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="task-input" placeholder="Add Task..." name="addTask" required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn" >
                   {editItem ? "Edit Task" : "Add Task" }
                </button>
                <button className="btn clear-btn" onClick={clearTasks}>
                    Clear Tasks
                </button>
            </div>
        </form>
    )
}

export default TaskForm

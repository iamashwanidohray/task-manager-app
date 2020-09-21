import React, { createContext, useState, useEffect } from 'react'
import uuid from 'react-uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {

    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks,setTasks] = useState(initialState)

    useEffect(() => {
        localStorage.setItem('tasks',JSON.stringify(tasks),[tasks]);
    })

    const [editItem,setEditItem] = useState(null)

    const addTask = (taskDescription) => {
        setTasks([...tasks,{id: uuid(), description: taskDescription, createdDate: new Date().toLocaleString() }])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => (task.id !== id)))
    }

    const findTask = (id) => {
        const item = tasks.find((task) => task.id === id )
        // console.log(item);

        setEditItem(item)
    }

    const clearTasks = () => {
        setTasks([])
    }

    const updateTask = (id,description) => {

        const newTasks = tasks.map((task) => (task.id === id ? {id,description,createdDate: new Date().toLocaleString()} :  task) )
        setEditItem(null)
        setTasks(newTasks)
    }

    return (
        <TaskListContext.Provider value={{tasks,addTask,deleteTask,updateTask,clearTasks,findTask,editItem}}>{props.children}</TaskListContext.Provider>
    )
}

export default TaskListContextProvider;

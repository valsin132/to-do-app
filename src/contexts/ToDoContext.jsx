/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ToDoContext = createContext()

const ToDoContextProvider = ( props ) => {
    const [tasks, setTasks] = useState(() => {
        const localData = localStorage.getItem('tasks');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    const addTask = (task, description) => {
        setTasks([...tasks, {task, description, isCompleted: false, id: uuidv4()}])
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    };

    const toggleTaskCompletion = (id) => {
        setTasks(
            tasks.map(task => 
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };
    

    return (
        <ToDoContext.Provider value={{tasks, addTask, removeTask, toggleTaskCompletion}}>
            {props.children}
        </ToDoContext.Provider>
    );
}
 
export default ToDoContextProvider;
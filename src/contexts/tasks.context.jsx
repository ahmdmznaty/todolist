import React, { useState, useEffect, createContext } from 'react';

export const TasksContext = createContext();
export default props => {
    const [tasks, setTasks] = useState([]);
    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
        	{props.children}
        </TasksContext.Provider>
    );
}
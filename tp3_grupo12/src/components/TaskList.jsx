import React from 'react';
import TaskItem from './TaskItem.jsx'

const TaskList = ( {tareas, onEliminar, onMarcarCompletada} ) => {
    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {tareas.map((tarea, index) =>(
                    <TaskItem 
                        key={index}
                        tarea={tarea}
                        onEliminar={() => onEliminar(index)}
                        onMarcarCompletado={() => onMarcarCompletada(index)}
                    ></TaskItem>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
import React from "react";

const TaskItem = ({ tarea, onMarcarCompletado, onEliminar }) => {
    return (
        <li style={{ textDecoration: tarea.realizada ? 'line-through' : 'none' }}>
            <span> {tarea.texto} </span>
            <button onClick={onMarcarCompletado}>
                {tarea.realizada ? 'Desmarcar' : 'Realizar'}
            </button>
            <button onClick={onEliminar}>Eliminar</button>
        </li>
    )
}

export default TaskItem
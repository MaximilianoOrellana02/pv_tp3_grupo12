import React, { use, useState } from "react";

const TaskInput = ({ onAgregarTarea }) => {
    const [textoTarea, setTextoTarea] = useState('');

    const estadoInput = (e) => {
        setTextoTarea(e.target.value);
    }

    const manejoSubmit = (e) => {
        e.preventDefault();
        onAgregarTarea(textoTarea);
        setTextoTarea('');
    }


    return (
        <form onSubmit={manejoSubmit}>
            <input 
                type="text" 
                placeholder="Nueva Tarea"
                value={textoTarea}
                onChange={estadoInput}
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default TaskInput
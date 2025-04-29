import { useState } from 'react'
import './App.css'


import TaskInput from './components/TaskInput.jsx'
import TaskList from './components/TaskList.jsx';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (textoTarea) => {
    if (textoTarea.trim() !== '') {
      setTareas([...tareas, {texto: textoTarea, completada: false}]);
    }
  }

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  }

  const marcarCompletada = (index) => {
    const nuevasTareas = tareas.map((tarea, i) =>
      i === index ? { ...tarea, realizada: !tarea.realizada } : tarea
    );
    setTareas(nuevasTareas);
};

  return (
    <>
      <div>
        <h1>Agregar Tarea</h1>
        <TaskInput onAgregarTarea={agregarTarea} />
        <TaskList 
        tareas={tareas} 
        onEliminar={eliminarTarea}
        onMarcarCompletada={marcarCompletada}
        />
      </div>
    </>
  );
}

export default App

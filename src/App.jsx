import React, { useState } from 'react';

const MyReactTaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState({
    titulo: '',
    descripcion: '',
    completada: false,
    pendiente: true,
  });

  // Función para agregar una nueva tarea al listado
  const addTask = () => {
    if (newTask.title.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask({
        titulo: '',
        descripcion: '',
        completada: true,
        pendiente: false,
      });
    }
  };

  // Función para eliminar una tarea del listado
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Función para editar una tarea
  const editTask = (index) => {
    setEditingTask(index);
    setNewTask(tasks[index]);
  };

  // Función para guardar los cambios después de editar una tarea
  const saveEditedTask = () => {
    if (newTask.title.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editingTask] = newTask;
      setTasks(updatedTasks);
      setEditingTask(null);
      setNewTask({
        titulo: '',
        descripcion: '',
        completada: false,
        pendiente: true,
      });
    }
  };

  // JSX para mostrar la lista de tareas
  return (
    <div>
      <h1>Mi lista de tareas</h1>

      {/* Formulario para agregar nueva tarea */}
      <div>
        <input
          type="text"
          placeholder="Título"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button onClick={addTask}>Agregar Tarea</button>
      </div>
{/* Lista de tareas */}
<ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.title}</span>
            <span>{task.description}</span>
            <span>{task.completed ? 'Completada' : 'Pendiente'}</span>
            <button onClick={() => editTask(index)}>Editar</button>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {/* Formulario para editar tarea */}
      {editingTask !== null && (
        <div>
          <input
            type="text"
            placeholder="Título"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <button onClick={saveEditedTask}>Guardar Cambios</button>
        </div>
      )}
    </div>
  );
};

export default MyReactTaskList;
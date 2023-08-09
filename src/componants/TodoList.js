import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList () {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Limpiar la casa', completed: false },
    { id: 3, description: 'Hacer ejercicio', completed: false },
  ]);

  const handleToggle = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task.description}
          completed={task.completed}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
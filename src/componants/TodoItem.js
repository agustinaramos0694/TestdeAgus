import React from 'react';

const TodoItem = React.memo(({ task, completed, onToggle }) => {
  console.log('Renderización del componente TodoItem');
  
  const handleToggle = () => {
    onToggle(task);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task}
      </span>
    </li>
  );
});

export default TodoItem;
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  const [localTasks, setLocalTasks] = useState(tasks || []);

  useEffect(() => {
    setLocalTasks(tasks || []);
  }, [tasks]);

  function handleDelete(id) {
    const updatedTasks = localTasks.filter((task) => task.id !== id);
    setLocalTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function handleEdit(id, updatedTask) {
    const updatedTasks = localTasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    setLocalTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <>
      <div>
        <h2>Task List</h2>
        {localTasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          localTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </>
  )
}


export default TaskList;

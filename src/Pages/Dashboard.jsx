import React, { useEffect, useState } from "react";
import TaskForm from "../Components/Auth/Layout/Tasks/TaskForm";
import TaskList from "../Components/Auth/Layout/Tasks/TaskList";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  // keep UI in sync with localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  function handleAddTask(newTask) {
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Dashboard;



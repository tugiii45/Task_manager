import { useState } from "react";
import TaskForm from "../Components/Auth/Layout/Tasks/TaskForm";
import TaskList from "../Components/Auth/Layout/Tasks/TaskList";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList />
    </div>
  );
}

export default Dashboard;
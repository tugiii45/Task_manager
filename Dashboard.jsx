import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
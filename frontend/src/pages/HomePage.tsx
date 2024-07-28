import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TasksForm";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tasks!", error);
      });
  }, []);

  const addTask = (task: Task) => {
    console.log("Adding task:", task);
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-2xl font-bold mt-6 mb-4 text-center ">
            All Tasks
          </h1>
          <div className="grid grid-cols-1 gap-4 ">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Create Task</h1>
          <TaskForm onAddTask={addTask} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

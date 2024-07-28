import React, { useState } from "react";
import axios from "axios";
import { Task } from "../types/Task";
import { toast } from "react-toastify";

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"To_Do" | "In_Progress" | "Done">(
    "To_Do"
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newTask: Omit<Task, "id"> = { title, description, status };

    console.log("Sending task:", newTask);

    axios
      .post("http://localhost:4000/api/create", newTask)
      .then((response) => {
        toast.success("Task created successfully!");
        console.log("Task created:", response.data);
        onAddTask(response.data);
        setTitle("");
        setDescription("");
        setStatus("To_Do");
      })
      .catch((error) => {
        toast.error("There was an error creating the task!");
        console.error("There was an error creating the task!", error.response);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-2 border rounded-lg shadow-md bg-white max-w-xs mx-auto"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as "To_Do" | "In_Progress" | "Done")
          }
          required
        >
          <option value="To_Do">To-Do</option>
          <option value="In_Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

interface TaskItemProps {
  task: Task;
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onUpdateTask,
  onDeleteTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const validateForm = () => {
    const newErrors: { title?: string; description?: string } = {};

    if (!title) {
      newErrors.title = "Title is required";
    }
    if (!description) {
      newErrors.description = "Description is required";
    }

    return newErrors;
  };

  const handleUpdate = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedTask = { title, description, status }; // Exclude `id`
    axios
      .put(`http://localhost:4000/api/update/${task.id}`, updatedTask)
      .then((response) => {
        toast.success("Task updated successfully!");
        onUpdateTask(response.data);
        setIsEditing(false);
        setErrors({});
      })
      .catch((error) => {
        toast.error("There was an error updating the task!");
        console.error("There was an error updating the task!", error.response);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/api/delete/${task.id}`)
      .then(() => {
        toast.success("Task deleted successfully!");
        onDeleteTask(task.id);
      })
      .catch((error) => {
        toast.error("There was an error deleting the task!");
        console.error("There was an error deleting the task!", error.response);
      });
  };

  return (
    <div className="p-4 border rounded-md shadow-sm text-center">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full mb-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
          )}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full mb-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
          )}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="block w-full mb-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="To_Do">To-Do</option>
            <option value="In_Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-green-500 text-white rounded-md mr-2"
          >
            Update
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <p className="text-sm text-gray-500">{task.status}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 mt-4 py-2 bg-yellow-500 text-white rounded-md mr-2"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 mt-4 py-2 bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;

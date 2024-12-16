import { useState } from "react";

function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask(""); // Clear input field
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4 mb-6">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="px-4 py-2 border rounded-md shadow w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;

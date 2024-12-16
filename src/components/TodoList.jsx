function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
      <div className="w-full max-w-lg bg-white p-4 rounded-md shadow-md">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks added yet!</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <div
                  onClick={() => toggleTodo(todo.id)}
                  className={`cursor-pointer ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default TodoList;
  
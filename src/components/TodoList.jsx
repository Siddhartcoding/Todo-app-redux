import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Fetching filtered todos from the Redux store
  const filteredTodos = useSelector((state) => {
    const todos = state.todos; // Array of all todos
    const filter = state.filter; // Current filter setting
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    // Filtering todos based on filter and search term
    return todos.filter((todo) => {
      // Checking if todo matches filter criteria
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      // Checking if todo text matches search term
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      // Returning true only if todo matches both filter and search criteria
      return matchesFilter && matchesSearch;
    });
  });

  console.log("Filtered Todos:", filteredTodos); // Logging filtered todos

  return (
    <ul>
      {/* Placeholder message for the list */}
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {/* Rendering TodoItem component for each filtered todo */}
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;

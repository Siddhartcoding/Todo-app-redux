import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions"; // Importing action creators
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch(); // Dispatcher function to dispatch actions

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        {/* Displaying todo index */}
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        {/* Displaying todo text with strike-through if completed */}
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        {/* Button to toggle todo completion */}
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))} // Dispatching toggleTodo action
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        {/* Button to remove todo */}
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))} // Dispatching removeTodo action
        >
          <FaTrash />
        </button>
        {/* Button to mark todo as completed */}
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))} // Dispatching markCompleted action
          >
            <FaCheck />
          </button>
        )}
        {/* Button to mark todo as incomplete */}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))} // Dispatching markIncomplete action
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;

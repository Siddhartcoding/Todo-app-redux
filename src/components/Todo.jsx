import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

// main page displaying the task
const Todo = () => {
  // Extracting state variables using useSelector from Redux store
  const todos = useSelector((state) => state.todos); // Array of todos
  const filter = useSelector((state) => state.filter); // Current filter setting
  const dispatch = useDispatch(); // Dispatcher function to dispatch actions

  // Local state variables using useState hook
  const [newTodoText, setNewTodoText] = useState(""); // Input field for new todo item
  const [searchTerm, setSearchTerm] = useState(""); // Input field for searching todos

  // Function to add a new todo item
  const handleAddTodo = (text) => {
    dispatch(addTodo(text)); // Dispatching addTodo action with text as payload
  };

  // Handler for clicking the add todo button
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      // Checking if the new todo text is not empty
      handleAddTodo(newTodoText.trim()); // Calling handleAddTodo function with trimmed text
      setNewTodoText(""); // Clearing the input field after adding todo
    }
  };

  // Handler for input change in the search input field
  const handleSearchChange = (value) => {
    setSearchTerm(value); // Setting the searchTerm state variable
    dispatch(updateSearchTerm(value)); // Dispatching updateSearchTerm action with the search term
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>
      <div className="flex items-center mb-4">
        {/* Input field for adding new todo */}
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)} // Handling input change
        />
        {/* Button to add new todo */}
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick} // Handling click event
        >
          <BsPlus size={20} />
        </button>
      </div>
      {/* Search input field and button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons /> {/* Component for filter buttons */}
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)} // Handling input change for search
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
      <TodoList /> {/* Component to display list of todos */}
    </div>
  );
};

export default Todo;

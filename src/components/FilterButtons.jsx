import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";

// Component for displaying filter buttons and marking all todos as completed

const FilterButtons = () => {
  const dispatch = useDispatch(); // Dispatcher function to dispatch actions
  // Fetching the current filter value from the Redux store
  const currentFilter = useSelector((state) => state.filter);

  // Function to handle filter selection
  const handleFilter = (filter) => {
    dispatch(filterTodos(filter)); // Dispatching filterTodos action with selected filter
  };

  return (
    <div className="flex space-x-4 items-center">
      {/* Dropdown for selecting filter */}
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)} // Handling filter change
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      {/* Button to mark all todos as completed */}
      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(markAllCompleted())} // Handling click event to mark all completed
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;

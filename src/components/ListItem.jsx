import React, { useState } from 'react';
import { remove, edit } from '../features/Slices/todoSlice';
import { useDispatch } from 'react-redux';
import { FaRegEdit } from 'react-icons/fa';


function ListItem({ todo, title }) {
  const dispatch = useDispatch();
  const [showButtons, setShowButtons] = useState(false);


  const handleRemove = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      dispatch(remove(id));
    }
  };

  const handleEdit = () => {
    const updatedTodo = { ...todo, title: title };
    dispatch(edit(updatedTodo));
  };
  

  const handleInfoButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="max-content flex justify-between w-80 p-4 max-h-min border border-orange-500">
      <span>
        <li className="w-full text-xl ">{todo.text}</li>
        <li>{todo.title}</li>

      </span>

      <span className="flex space-x-3 h-8">
        <button
          className="border border-orange-500 p-1 rounded-lg w-8"
          onClick={handleInfoButtonClick}
        >
          i
        </button>

        {showButtons && (
          <>
            <button
              className="hover:bg-orange-500 rounded-lg py-0 p-2 border border-orange-600"
              onClick={() => handleRemove(todo.id)}
            >
              x
            </button>
            <button
              className="hover:bg-orange-500 rounded-md p-1 border border-orange-500"
              onClick={() => handleEdit(todo)}
            >
              <FaRegEdit />
            </button>
          </>
        )}
      </span>
    </div>
  );
}

export default ListItem;

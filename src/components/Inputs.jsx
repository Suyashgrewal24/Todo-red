import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, updateTodo } from '../features/Slices/todoSlice';

function Inputs() {
  const { edit } = useSelector(state => state.todos);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: crypto.randomUUID(), text: text, title: title };
    if (edit.isEdit) {
      dispatch(updateTodo({ id: edit.todo.id, text: text, title: title }));
    } else {
      dispatch(add(newTodo));
    }
    setText("");
    setTitle("");
  };

  useEffect(() => {
    setText(edit.todo.text);
    setTitle(edit.todo.title);
  }, [edit]);

  const isEditMode = edit.isEdit;

  return (
    <form className='flex justify-center' onSubmit={handleSubmit}>
      <div className="input-box grid mt-10 mx-5 grid-rows-2 grid-flow-col w-[550px] items-center gap-2">
      
        <input required type="text" placeholder='Title...' className='bg-[#1F1E1B] border-2 border-orange-500 p-1.5 col-span-8 row-span-1' value={text} onChange={(e) => setText(e.target.value)} />

        <input required type="text" p placeholder='Input...' className='bg-[#1F1E1B] border-2 p-1.5 border-orange-500 col-span-8 row-span-1' value={title} onChange={(e) => setTitle(e.target.value)} />

        <button className='p-2 h-full rounded-md border-2 text-2xl text-orange-600 bg-[#1F1E1B] border-orange-600 col-span-2 row-span-2'>
          {isEditMode ? 'Update' : '+'}
        </button>
      </div>
    </form>
  );
}

export default Inputs;

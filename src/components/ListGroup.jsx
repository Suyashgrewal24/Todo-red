import React from 'react';
import Listitem from './ListItem';
import { useSelector } from 'react-redux';

function ListGroup() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <>
      <div className="TaskBar md:border-2 bg-[#1F1E1B] min-h-[48vh] m-6 md:border-orange-500 md:mx-40 md:mt-16  flex flex-wrap">
      
        <ul className="list-group flex content-start flex-wrap sm:grid-cols-2 md:grid-cols-3 grid-cols-1 p-4 w-full gap-6">

          {todos.length === 0 ? (
            <h1 className='md:col-start-2 w-full h-full border-orange-500 grid place-items-center'>
              <span className='p-1.5 text-2xl border-t border-b border-orange-500'>No tasks</span>
            </h1>
          ) : null}
          {todos.map((todo) => (
            <Listitem key={todo.id} todo={todo} title={todo.title} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;

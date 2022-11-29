import { Todo } from 'types/types';

interface TodoListProp {
  items: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const ItemsList = ({ items, toggleTodo, removeTodo }: TodoListProp) => {
  return (
    <div className='view-sm mt-3 flex-col'>
      {(items &&
        items.length !== 0 &&
        items.map(({ id, title, isCompleted }) => {
          return (
            <div key={id} className='flex justify-between'>
              <div className='ui-checkbox items-center'>
                <input
                  id={id}
                  type='checkbox'
                  checked={isCompleted}
                  onChange={() => toggleTodo(id)}
                />
                <label htmlFor={id}>{title}</label>
              </div>
              <span className='ui-link' onClick={() => removeTodo(id)}>
                Remove
              </span>
            </div>
          );
        })) || <p className='view-sm mt-3 text-sm'>List not found :(</p>}
    </div>
  );
};

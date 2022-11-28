import { Todo } from '../../types/types';

interface TodoListProp {
  items: Todo[];
  toggleTodo: (id: string) => void;
}

export const TodoList = ({ items, toggleTodo }: TodoListProp) => {
  return (
    <ul>
      {(items &&
        items.length !== 0 &&
        items.map(({ id, title }) => {
          return (
            <div key={id} className='ui-checkbox view-sm mt-3'>
              <input id={id} type='checkbox' onChange={() => toggleTodo(id)} />
              <label htmlFor={id}>{title}</label>
            </div>
          );
        })) || <p className='view-sm mt-3'>'List not found :('</p>}
    </ul>
  );
};

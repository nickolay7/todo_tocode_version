import { Todo } from 'types/types';
import { Item } from './item';

interface ItemsListProp {
  items: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const ItemsList = ({ items, toggleTodo, removeTodo }: ItemsListProp) => {
  return (
    <div className='view-sm flex-col'>
      {(items &&
        items.length !== 0 &&
        items.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))) || <p className='view-sm mt-3 text-sm'>List not found :(</p>}
    </div>
  );
};

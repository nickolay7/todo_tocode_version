import { Todo } from 'types/types';
import { TagsList } from '../tagsList';

interface ItemProp {
  todo: Todo;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const Item = ({
  todo: { id, title, isCompleted, tags },
  toggleTodo,
  removeTodo,
}: ItemProp) => {
  const tagsWithoutActive = tags.map((tag) => ({
    ...tag,
    isActive: false,
  }));

  return (
    <div className='mb-3' key={id}>
      <div
        className='flex justify-between'
        style={{
          background: 'var(--ui-g-10)',
          padding: '1rem',
          borderRadius: '0.4rem',
        }}
      >
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
      <TagsList items={tagsWithoutActive} isDisabled />
    </div>
  );
};

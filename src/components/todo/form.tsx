import { ChangeEvent, FormEvent, useState } from 'react';
import { TagsList } from './tagsList/tagsList';
import { useAppContext } from 'app/contextProvider';

interface FormProp {
  addTodo: (title: string) => void;
}

export const Form = ({ addTodo }: FormProp) => {
  const { tags, setTagActive } = useAppContext();

  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form
      className='view-sm mb-8'
      onSubmit={onSubmit}
      style={{
        background: 'var(--ui-g-10)',
        padding: '1rem',
        borderRadius: '0.4rem',
      }}
    >
      <div className='flex items-end'>
        <div className='ui-input' style={{ width: '100%' }}>
          <label htmlFor='input-DqS1'>Add task:</label>
          <input
            id='input-DqS1'
            required
            type='text'
            value={inputValue}
            placeholder='Enter your task'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
        </div>
        <button className='ui-button isPrimary'>Submit</button>
      </div>
      <div className='flex flex-wrap items-end mt-2'>
        <p className='pr-2' style={{ fontSize: '0.77778rem' }}>
          Choice tags:
        </p>
        <TagsList items={tags} onItemClick={setTagActive} />
      </div>
    </form>
  );
};

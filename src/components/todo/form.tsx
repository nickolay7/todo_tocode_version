import { ChangeEvent, FormEvent, useState } from 'react';

interface FormProp {
  addTodo: (title: string) => void;
}

export const Form = ({ addTodo }: FormProp) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form className='view-sm flex items-end' onSubmit={onSubmit}>
      <div className='ui-input' style={{ width: '100%' }}>
        <label htmlFor='input-DqS1'>Add task</label>
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
    </form>
  );
};

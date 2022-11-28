import { useState } from 'react';
import { v4 as fakeId } from 'uuid';

import { Container } from 'layout/Container';
import { Todo } from 'types/types';
import { Form } from '../../components/todo';

interface HomeProps {}

interface TodoListProp {
  items: Todo[];
}

const TodoList = ({ items }: TodoListProp) => {
  return (
    <ul>
      {(items &&
        items.length !== 0 &&
        items.map(({ id, title }) => <li key={id}>{title}</li>)) ||
        'List not found :('}
    </ul>
  );
};

export const Home = ({}: HomeProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: fakeId(),
      title,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <Container className=''>
      <Form addTodo={addTodo} />
      <TodoList items={todos} />
    </Container>
  );
};

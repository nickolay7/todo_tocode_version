import { useEffect, useState } from 'react';
import { v4 as fakeId } from 'uuid';

import { Container } from 'layout/Container';
import { Todo } from 'types/types';
import { Form, TodoList } from '../../components/todo';

export const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: fakeId(),
      title,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  useEffect(() => console.log(todos));

  const toggleTodo = (id: string) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setTodos(newTodo);
  };

  return (
    <Container className=''>
      <Form addTodo={addTodo} />
      <TodoList items={todos} toggleTodo={toggleTodo} />
    </Container>
  );
};

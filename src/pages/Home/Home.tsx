import { useEffect, useState } from 'react';
import { v4 as fakeId } from 'uuid';

import { Container } from 'layout/Container';
import { Todo } from 'types/types';
import { Form, ItemsList } from 'components/todo';
import todosSeeder from 'seeders/todos.json';

export const Home = () => {
  const localStorageData = JSON.parse(localStorage.getItem('todos') || 'null');

  const _items =
    localStorageData && localStorageData.length > 0
      ? localStorageData
      : todosSeeder;

  const [items, setItems] = useState<Todo[]>(_items || []);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: fakeId(),
      title,
      isCompleted: false,
    };

    setItems([...items, newTodo]);
  };

  const toggleTodo = (id: string) => {
    const newTodo = items.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setItems(newTodo);
  };

  const removeTodo = (id: string) => {
    const newTodos = items.filter((todo) => todo.id !== id);

    setItems(newTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  return (
    <Container className=''>
      <Form addTodo={addTodo} />
      <ItemsList
        items={items}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </Container>
  );
};

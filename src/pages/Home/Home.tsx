import { useEffect } from 'react';
import { v4 as fakeId } from 'uuid';

import { Container } from 'layout/Container';
import { Todo } from 'types/types';
import { Form, ItemsList } from 'components/todo';
import { useAppContext } from 'app/contextProvider';
import { FilterByTag } from 'components/todo/filterByTag';
import { viewFilter } from './lib/viewFilter';
import { useLocalStorage } from './lib/useLocalStorage';

export const Home = () => {
  const { tags, filter, filterTags, setFilterByTag, resetTagsActive } =
    useAppContext();

  const [items, setItems] = useLocalStorage();

  const activeTags = tags.filter(({ isActive }) => isActive);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: fakeId(),
      title,
      isCompleted: false,
      tags: activeTags,
    };

    setItems([...items, newTodo]);
    resetTagsActive();
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

  useEffect(() => setFilterByTag(), [filterTags, setFilterByTag]);

  const visibleTodo = viewFilter(items, filter);

  return (
    <Container className=''>
      <div className='view-wrapper'>
        <div className='view-sidebar'>
          <FilterByTag />
        </div>
        <div className='view-content'>
          <Form addTodo={addTodo} />
          <ItemsList
            items={visibleTodo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </div>
      </div>
    </Container>
  );
};

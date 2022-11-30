import { Todo } from 'types/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import todosSeeder from 'seeders/todos.json';

export const useLocalStorage = (): [
  Todo[],
  Dispatch<SetStateAction<Todo[]>>
] => {
  const localStorageData = JSON.parse(localStorage.getItem('todos') || 'null');

  const _items =
    localStorageData && localStorageData.length > 0
      ? localStorageData
      : todosSeeder;

  const [items, setItems] = useState<Todo[]>(_items || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  return [items, setItems];
};

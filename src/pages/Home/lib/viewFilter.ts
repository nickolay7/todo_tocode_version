import { Todo } from '../../../types/types';

export const viewFilter = (data: Todo[], filter: string) => {
  switch (filter) {
    case 'work':
      return data.filter(({ tags }) =>
        tags.find(({ title }) => title === 'work')
      );
    case 'home':
      return data.filter(({ tags }) =>
        tags.find(({ title }) => title === 'home')
      );
    case 'study':
      return data.filter(({ tags }) =>
        tags.find(({ title }) => title === 'study')
      );
    case 'idea':
      return data.filter(({ tags }) =>
        tags.find(({ title }) => title === 'idea')
      );
    case 'self':
      return data.filter(({ tags }) =>
        tags.find(({ title }) => title === 'self')
      );
    case '':
      return data;
    default:
      return [];
  }
};

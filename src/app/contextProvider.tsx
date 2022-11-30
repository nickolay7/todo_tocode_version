import { createContext, ReactNode, useContext, useState } from 'react';

import tags from 'seeders/tags.json';
import { Tag } from 'types/types';

interface IContext {
  tags: Tag[];
  filter: string;
  filterTags: Tag[];
  setTagActive: (id: number) => void;
  resetTagsActive: () => void;
  resetFilterTagsActive: () => void;
  setFilterTagActive: (id: number, filter: string) => void;
  setFilterByTag: () => void;
}

const Context = createContext<IContext>({} as IContext);

const initialState = tags;

export const AppContext = ({ children }: { children: ReactNode }) => {
  const [tags, setTags] = useState<Tag[]>(initialState);
  const [filterTags, setFilterTags] = useState<Tag[]>(initialState);
  const [filter, setFilter] = useState('');

  const setTagActive = (id: number) => {
    const newTags = [...tags].map((tag) =>
      tag.id === id ? { ...tag, isActive: !tag.isActive } : tag
    );

    setTags(newTags);
  };

  const setFilterTagActive = (id: number, filter: string) => {
    const copy = [...filterTags];

    const newTags = copy
      .map((tag) => (tag.id === id ? { ...tag, isActive: !tag.isActive } : tag))
      .map((tag) => (tag.id !== id ? { ...tag, isActive: false } : tag));

    setFilterTags(newTags);
  };

  const setFilterByTag = () => {
    const tag = filterTags.find(({ isActive }) => isActive);

    setFilter(tag?.title || '');
  };

  const resetTagsActive = () => {
    const newTags = [...tags].map((tag) => ({ ...tag, isActive: false }));

    setTags(newTags);
  };

  const resetFilterTagsActive = () => {
    const newTags = [...filterTags].map((tag) => ({ ...tag, isActive: false }));

    setFilterTags(newTags);
  };

  const value = {
    tags,
    filter,
    filterTags,
    setTagActive,
    resetTagsActive,
    resetFilterTagsActive,
    setFilterTagActive,
    setFilterByTag,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext(Context);

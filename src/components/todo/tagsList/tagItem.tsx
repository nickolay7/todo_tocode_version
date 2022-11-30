import { Tag } from 'types/types';
import classNames from 'classnames';
import React from 'react';

interface TagItemProp {
  tag: Tag;
  isDisabled?: boolean;
  onItemClick?: (id: number, filter: string) => void;
}

export const TagItem = ({
  tag: { id, title, isActive },
  onItemClick,
  isDisabled,
}: TagItemProp) => {
  const classes = classNames('ui-tag', {
    isActive,
    isDisabled,
    'text-decoration-none': isDisabled,
  });

  return (
    <span
      key={title}
      className={classes}
      onClick={() => {
        !isDisabled && onItemClick && onItemClick(id, title);
      }}
    >
      {title}
    </span>
  );
};

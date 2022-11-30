import React from 'react';
import classNames from 'classnames';
import { Tag } from 'types/types';
import { TagItem } from './tagItem';

interface TagsProp {
  items: Tag[];
  isVertical?: boolean;
  isDisabled?: boolean;
  isInline?: boolean;
  onItemClick?: (id: number, filter: string) => void;
  className?: string;
}

export const TagsList = ({
  items,
  isVertical,
  isInline,
  isDisabled = false,
  className,
  onItemClick,
  ...attrs
}: TagsProp) => {
  const classes = classNames('ui-button-group', className, {
    isDisabled,
    isVertical,
    isInline,
  });

  const elements =
    items &&
    items.length > 0 &&
    items.map((tag) => (
      <TagItem
        key={tag.id}
        tag={tag}
        isDisabled={isDisabled}
        onItemClick={onItemClick}
      />
    ));

  return <div className={classes}>{elements}</div>;
};

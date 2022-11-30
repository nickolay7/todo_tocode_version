import { TagsList } from './tagsList';
import { useAppContext } from 'app/contextProvider';

import { ReactComponent as RefreshIcon } from 'assets/img/refresh.svg';

export const FilterByTag = () => {
  const { filterTags, setFilterTagActive, resetFilterTagsActive } =
    useAppContext();

  const isShowHelper = !!filterTags.filter(({ isActive }) => isActive).length;

  return (
    <>
      <p className='pb-2 pt-3' style={{ fontSize: '0.77778rem' }}>
        Sort by tag:
      </p>
      <div className='ui-button-group ml-2 isVertical isInline'>
        <TagsList items={filterTags} onItemClick={setFilterTagActive} />
      </div>
      {isShowHelper && (
        <>
          <div
            className='ui-button isLink justify-start mt-2'
            style={{
              width: '100%',
              padding: '0px',
              height: 'auto',
              fontSize: '0.77778rem',
            }}
            onClick={resetFilterTagsActive}
          >
            <RefreshIcon />
            Refresh sort
          </div>
          <p style={{ width: '100%', fontSize: '0.56rem' }}>
            Or double click by active tag
          </p>
        </>
      )}
    </>
  );
};

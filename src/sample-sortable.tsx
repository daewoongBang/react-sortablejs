/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

interface ItemType {
  id: number;
  name: string;
}

const SampleSortable = () => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: 'Netflix' },
    { id: 2, name: 'Youtube' },
    { id: 3, name: 'Amazon' },
    { id: 4, name: 'Disney' },
    { id: 5, name: 'HBO' }
  ]);

  return (
    <div
      className='sample-sortable'
      css={{
        '> div': {
          display: 'flex',
          flexDirection: 'column',
          listStyle: 'none',
          gap: '8px',
          maxWidth: '200px',
          fontSize: '20px',
          userSelect: 'none',

          '> .sortable-item': {
            padding: '8px',
            borderRadius: '4px',
            backgroundColor: '#acacac'
          }
        }
      }}
    >
      <ReactSortable list={state} setList={setState}>
        {state.map(item => (
          <div className='sortable-item' key={`list-${item.id}`}>
            {item.name}
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default SampleSortable;

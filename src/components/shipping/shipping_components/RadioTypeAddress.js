import React from 'react';

export default function RadioTypeAddress({ data, index, indexMethod, setIndexMethod }) {
  return (
    <div className="pb-2 flex px-2">
        <input
            id={index + '-method'}
            type={'radio'}
            checked={indexMethod === index}
            onChange={() => setIndexMethod(index)}
        />
            <span>
                <div className='px-1'>{data.title}</div>
            </span>
    </div>
  )
}

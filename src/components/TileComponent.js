import React from 'react';


const TileComponent = ({title, result }) => {
    return (
        <div className='tile-component'>
            <span className='tile-result'>{result}</span>
            <span className='tile-title'>{title}</span>
        </div>
    );
};

export default TileComponent;

import React from 'react';

const ReloadDataComponent = ({reloadData1234, reloadData4321}) => {
    return (
        <div className='reload-data-container'>
            <button className='reload-data-button' onClick={reloadData1234}>Reload Data1234</button>
            <button className='reload-data-button' onClick={reloadData4321}>Reload Data4321</button>
        </div>
    );
};

export default ReloadDataComponent;

import React from 'react';

const InputDataComponent = ({dataChangeHandler, addValue}) => {
    return (
        <div className='input-container'>
            <input type="number" placeholder='Enter a number' onChange={dataChangeHandler}/>
            <button type={'button'} onClick={addValue}>Submit</button>
        </div>
    );
};

export default InputDataComponent;

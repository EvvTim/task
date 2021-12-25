import React from 'react';
import InputDataComponent from "../InputDataComponent/InputDataComponent";
import ReloadDataComponent from "../ReloadDataComponent/ReloadDataComponent";

const InputSection = ({reloadData1234, reloadData4321, dataChangeHandler, addValue}) => {
    return (
        <section className="input-section">
            <InputDataComponent dataChangeHandler={dataChangeHandler} addValue={addValue}/>
            <ReloadDataComponent reloadData1234={reloadData1234} reloadData4321={reloadData4321}/>
        </section>
    );
};

export default InputSection;

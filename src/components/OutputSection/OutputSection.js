import React from 'react';
import TileComponent from "../TileComponent";

const OutputSection = ({mean, median, stdDeviation, mode}) => {
    return (
        <section className={'output-section'}>
            <div className={'output-wrapper'}>
                <TileComponent title={'Mean'} result={mean}/>
                <TileComponent title={'Median'} result={median}/>
                <TileComponent title={'Std deviation'} result={stdDeviation}/>
                <TileComponent title={'Mode'} result={mode}/>
            </div>
        </section>
    );
};

export default OutputSection;

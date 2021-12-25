import React from 'react';
import TileComponent from "../TileComponent";

const OutputSection = ({mean, median, stdDeviation}) => {
    return (
        <section className={'output-section'}>
            <div className={'output-wrapper'}>
                <TileComponent title={'Mean'} result={mean}/>
                <TileComponent title={'Median'} result={median}/>
                <TileComponent title={'Std deviation'} result={stdDeviation}/>
                <TileComponent title={'Mode'} result={'result'}/>
            </div>
        </section>
    );
};

export default OutputSection;

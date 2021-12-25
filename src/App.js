import React from 'react';
import './App.css';
import OutputSection from "./components/OutputSection/OutputSection";
import InputSection from "./components/InputSection/InputSection";
import useData from "./hooks/useData";
import useReloadData from "./hooks/useReloadData";
import useStdDeviation from "./hooks/useStdDeviation";
import useMedian from "./hooks/useMedian";
import useMean from "./hooks/useMean";
import calculateMode from "./hooks/calculateMode";

function App() {
    const [data, changeDataHandler, addValue] = useData()
    const [reloadData1234Handler, reloadData4321Handler, reloadData] = useReloadData(data)
    const stdDeviation = useStdDeviation(reloadData)
    const median = useMedian(reloadData)
    const mean = useMean(reloadData)
    const mode = calculateMode(reloadData)

  return (
      <div className="App">
        <OutputSection stdDeviation={stdDeviation} median={median} mean={mean} mode={mode} />
        <InputSection
            reloadData1234={reloadData1234Handler}
            reloadData4321={reloadData4321Handler}
            dataChangeHandler={changeDataHandler}
            addValue={addValue}
        />
      </div>
  );
}

export default App;

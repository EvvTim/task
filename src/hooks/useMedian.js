import {useEffect, useState} from "react";

const useMedian = (data) => {
  const [median, setMedian] = useState(0)

  useEffect(() => {
    if (data.length > 0) {
      const sortedData = data.sort((a, b) => a - b)
      const middle = Math.floor(sortedData.length / 2)
      const median = sortedData.length % 2 !== 0 ? sortedData[middle] : (sortedData[middle - 1] + sortedData[middle]) / 2
      setMedian(median)
    }
  }, [data])

  return median;
};

export default useMedian;

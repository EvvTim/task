import {useEffect, useState} from "react";

const useMean = (data) => {
  const [mean, setMean] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      setMean(data.reduce((acc, curr) => acc + curr) / data.length);
    }
  }, [data]);
  return Math.ceil((mean) * 10000) / 10000;
}

export default useMean

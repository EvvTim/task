import {useEffect, useState} from "react";

const useStdDeviation = (data) => {
    const [stdDeviation, setStdDeviation] = useState(0)

    useEffect(() => {
        if (data.length > 0) {
            const mean = data.reduce((acc, curr) => acc + curr, 0) / data.length
            const squaredDifferences = data.map(value => (value - mean) ** 2)
            const meanOfSquaredDifferences = squaredDifferences.reduce((acc, curr) => acc + curr, 0) / squaredDifferences.length
            setStdDeviation(Math.sqrt(meanOfSquaredDifferences))
        }
    }, [data])

    return  Math.ceil((stdDeviation) * 10000) / 10000
}

export default useStdDeviation

import useData1234 from "./useData1234";
import useData4321 from "./useData4321";
import {useEffect, useState} from "react";

const useData = () => {
    const [data, setData] = useState()
    const [newValue, setNewValue] = useState()
    const data1 = useData1234()
    const data2 = useData4321()

   // addValue

    const changeDataHandler = (e) => {
        setNewValue(e.target.value)
    }

    const addValue = () => {
        data.map(el=> el.push(+newValue))
    }


    useEffect(() => {
        setData(() => {
            if (data1 && data2) {
                return [
                    data1,
                    data2
                ]
            }
        })
    },[data1,data2])

    return [data, changeDataHandler, addValue]
}

export default useData

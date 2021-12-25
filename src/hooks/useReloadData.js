import {useEffect, useState} from "react";

const useReloadData = (data) => {
    const [reloadData, setReloadData] = useState([])
    const reloadData1234Handler = () => {
        setReloadData(data[0])
    }

    const reloadData4321Handler = () => {
        setReloadData(data[1])
    }

    useEffect(() => {
        if (data) {
            setReloadData(data[0])
        }
    }, [data])

    return [reloadData1234Handler, reloadData4321Handler, reloadData]
}

export default useReloadData;

import {useEffect, useState} from "react";

const useMode = (data) => {
    const [mode, setMode] = useState()

    useEffect(() => {
        setMode(null)
    })

    return mode

}


export default useMode

import axios from "axios";

const {useState, useEffect} = require("react");


const useData1234 = () => {
    const [data, setData] = useState([])
    const url = './data/data-1234.json'

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setData([...res.data.data]))
            .catch(error => console.log(error))
    }, []);

    return data
}

export default useData1234;

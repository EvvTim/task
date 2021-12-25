import axios from "axios";

const {useState, useEffect} = require("react");


const useData4321 = () => {
    const [data, setData] = useState([])
    const url = './data/data-4321.json'

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setData([...res.data.data]))
            .catch(error => console.log(error))
    }, []);

    return data
}

export default useData4321;

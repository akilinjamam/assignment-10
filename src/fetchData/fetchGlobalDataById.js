import axios from "axios";


const fetchGlobalDataById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/v1/globalEvents/${id}`)
    const globalData = response
    return globalData
};

export default fetchGlobalDataById;
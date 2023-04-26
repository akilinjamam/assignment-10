import axios from "axios";


const fetchGlobalDataById = async (id) => {
    try {
        const response = await axios.get(`https://assignment-10-server.onrender.com/api/v1/globalEvents/${id}`)
        const globalData = response
        return globalData
    } catch (error) {
        console.log(error.message);
    }
};

export default fetchGlobalDataById;
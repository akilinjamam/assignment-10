import axios from "axios";


const fetchGlobalDataById = async (id) => {
    try {
        const response = await axios.get(`https://asssignment-10-server-production.up.railway.app/api/v1/globalEvents/${id}`)
        const globalData = response
        return globalData
    } catch (error) {
        console.log(error.message);
    }
};

export default fetchGlobalDataById;
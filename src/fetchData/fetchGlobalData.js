import axios from "axios"

const fetchGlobalData = async (id, refetchGlobal) => {

    if (id) {
        const response = await axios.delete(`https://assignment-10-server.onrender.com/api/v1/globalEvents/${id}`)
        const globalData = response;
        refetchGlobal();
        return globalData;
    }

    const response = await axios.get('https://assignment-10-server.onrender.com/api/v1/globalEvents')
    const globalData = response;
    return globalData;
}

export default fetchGlobalData
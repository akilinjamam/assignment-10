import axios from "axios"

const fetchGlobalData = async (id, refetchGlobal) => {

    if (id) {
        const response = await axios.delete(`http://localhost:5000/api/v1/globalEvents/${id}`)
        const globalData = response;
        refetchGlobal();
        return globalData;
    }

    const response = await axios.get('http://localhost:5000/api/v1/globalEvents')
    const globalData = response;
    return globalData;
}

export default fetchGlobalData
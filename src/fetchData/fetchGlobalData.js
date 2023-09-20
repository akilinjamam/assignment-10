import axios from "axios"

const fetchGlobalData = async (id, refetchGlobal) => {

    if (id) {
        const response = await axios.delete(`https://asssignment-10-server-delta.vercel.app/api/v1/globalEvents/${id}`)
        const globalData = response;
        refetchGlobal();
        return globalData;
    }

    const response = await axios.get('https://asssignment-10-server-delta.vercel.app/api/v1/globalEvents')
    const globalData = response;
    return globalData;
}

export default fetchGlobalData
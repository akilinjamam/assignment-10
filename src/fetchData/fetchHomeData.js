import axios from "axios"

const fetchHomeData = async (id, reftchHome) => {

    if (id) {
        const response = await axios.delete(`https://asssignment-10-server-delta.vercel.app/api/v1/homeEvents/${id}`)
        const homeData = response;
        reftchHome()
        return homeData
    }

    const response = await axios.get('https://asssignment-10-server-delta.vercel.app/api/v1/homeEvents')
    const homeData = response;
    return homeData
}

export default fetchHomeData



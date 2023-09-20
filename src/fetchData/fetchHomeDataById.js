import axios from "axios"

const fetchHomeDataById = async (id) => {
    try {
        const response = await axios.get(`https://asssignment-10-server-delta.vercel.app/api/v1/homeEvents/${id}`)
        return response
    } catch (error) {
        console.log(error)
    }
};
export default fetchHomeDataById;
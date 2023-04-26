import axios from "axios"

const fetchHomeDataById = async (id) => {
    try {
        const response = await axios.get(`https://assignment-10-server.onrender.com/api/v1/homeEvents/${id}`)
        return response
    } catch (error) {
        console.log(error)
    }
};
export default fetchHomeDataById;
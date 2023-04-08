import axios from "axios"

const fetchHomeDataById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/homeEvents/${id}`)
        return response
    } catch (error) {
        console.log(error)
    }
};
export default fetchHomeDataById;
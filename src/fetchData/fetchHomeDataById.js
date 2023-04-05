import axios from "axios"

const fetchHomeDataById = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/v1/homeEvents/${id}`)
    return response
};
export default fetchHomeDataById;
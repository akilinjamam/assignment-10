import axios from "axios"

const fetchHomeData = async (id) => {

    if (id) {
        const response = await axios.delete(`http://localhost:5000/api/v1/homeEvents/${id}`)
        const homeData = response;
        return homeData
    }

    const response = await axios.get('http://localhost:5000/api/v1/homeEvents')
    const homeData = response;
    return homeData
}

export default fetchHomeData



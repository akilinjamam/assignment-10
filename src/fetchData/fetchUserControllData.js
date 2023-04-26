import axios from "axios"

const fetchUserControllData = async (id) => {

    if (id) {
        const response = await axios.get(`https://assignment-10-server.onrender.com/api/v1/userControll/${id}`)
        return response;
    }

    const response = await axios.get('https://assignment-10-server.onrender.com/api/v1/userControll');
    return response;

}

export default fetchUserControllData;
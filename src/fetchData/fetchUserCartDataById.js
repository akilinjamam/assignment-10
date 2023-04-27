import axios from "axios"


const fetchUserCartDataById = async (id) => {
    const result = axios.get(`https://assignment-10-server.onrender.com/api/v1/userCarts/${id}`);
    console.log(result);
    return result;
}

export default fetchUserCartDataById;
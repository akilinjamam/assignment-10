import axios from "axios"


const fetchUserCartDataById = async (id) => {
    const result = axios.get(`https://asssignment-10-server-delta.vercel.app/api/v1/userCarts/${id}`);
    console.log(result);
    return result;
}

export default fetchUserCartDataById;
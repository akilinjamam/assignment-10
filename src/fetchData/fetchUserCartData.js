import axios from "axios"

const fetchUserCartData = async (email) => {
    const result = await axios.get(`https://asssignment-10-server-production.up.railway.app/api/v1/userCarts?email=${email}`);
    return result;
};

export default fetchUserCartData;
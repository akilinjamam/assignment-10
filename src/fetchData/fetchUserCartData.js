import axios from "axios"

const fetchUserCartData = async (email) => {
    const result = await axios.get(`https://assignment-10-server.onrender.com/api/v1/userCarts?email=${email}`);
    return result;
};

export default fetchUserCartData;
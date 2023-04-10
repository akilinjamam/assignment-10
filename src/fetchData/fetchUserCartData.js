import axios from "axios"

const fetchUserCartData = async (email) => {
    const result = await axios.get(`http://localhost:5000/api/v1/userCarts?email=${email}`);
    return result;
};

export default fetchUserCartData;
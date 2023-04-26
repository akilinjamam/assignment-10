import axios from "axios"

const fetchCartData = async () => {
    const response = await axios.get('https://assignment-10-server.onrender.com/api/v1/userCarts/getAll')
    return response;
}

export default fetchCartData;
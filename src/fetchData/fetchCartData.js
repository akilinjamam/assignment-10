import axios from "axios"

const fetchCartData = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/userCarts/getAll')
    return response;
}

export default fetchCartData;
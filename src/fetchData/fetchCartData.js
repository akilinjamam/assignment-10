import axios from "axios"

const fetchCartData = async () => {
    const response = await axios.get('https://asssignment-10-server-production.up.railway.app/api/v1/userCarts/getAll')
    return response;
}

export default fetchCartData;
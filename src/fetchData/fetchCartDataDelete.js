import axios from "axios"

const fetchCartDataDelete = async (ids) => {

    const response = await axios.post('https://asssignment-10-server-delta.vercel.app/api/v1/userCarts/bulk-delete', { ids })

    return response;
}

export default fetchCartDataDelete;


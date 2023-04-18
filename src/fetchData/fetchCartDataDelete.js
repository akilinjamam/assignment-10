import axios from "axios"

const fetchCartDataDelete = async (ids) => {
    console.log(ids)
    const response = await axios.post('https://asssignment-10-server-production.up.railway.app/api/v1/userCarts/bulk-delete', { ids })
    console.log(response?.data?.result);
    return response;
}

export default fetchCartDataDelete;


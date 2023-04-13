import axios from "axios"

const fetchCartDataDelete = async (ids) => {
    console.log(ids)
    const response = await axios.post('http://localhost:5000/api/v1/userCarts/bulk-delete', { ids })
    console.log(response?.data?.result);
    return response;
}

export default fetchCartDataDelete;


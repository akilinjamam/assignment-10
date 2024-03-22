import axios from "axios"

const fetchUserControllUpdateData = async (id, data, refetch) => {


    const response = await axios.patch(`https://asssignment-10-server-delta.vercel.app/api/v1/userControll/${id}`, data);
    refetch();
    return response;

}

export default fetchUserControllUpdateData;
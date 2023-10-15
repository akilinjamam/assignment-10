import axios from "axios";

const fetchUpdatePaymentData = async (id, data, refetch) => {
    try {
        const result = await axios.patch(`https://asssignment-10-server-delta.vercel.app/api/v1/payment/${id}`, data);
        refetch();
        return result;
    } catch (error) {

    }
}

export default fetchUpdatePaymentData
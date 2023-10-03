import axios from "axios"

const fetchGetPaymentData = async () => {
    try {
        const result = await axios.get('https://asssignment-10-server-delta.vercel.app/api/v1/payment/');
        return result;
    } catch (error) {

    }
}

export default fetchGetPaymentData;
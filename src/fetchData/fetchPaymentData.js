import axios from "axios"

const fetchGetPaymentData = async () => {
    try {
        const result = await axios.get('http://localhost:5000/api/v1/payment/');
        return result;
    } catch (error) {

    }
}

export default fetchGetPaymentData;
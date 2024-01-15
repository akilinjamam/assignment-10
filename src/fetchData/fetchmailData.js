import axios from "axios"



export const fetchPostMail = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/api/v1/mail', data);
        return response
    } catch (error) {

    }
}
import axios from "axios"



export const fetchGetReviewData = async () => {
    try {
        const response = await axios.get('https://asssignment-10-server-delta.vercel.app/api/v1/reviews');

        return response
    } catch (error) {

    }
}
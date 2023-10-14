import axios from "axios"

export const fetchPostcommentData = async (data, refetchComment) => {
    try {
        const response = await axios.post('https://asssignment-10-server-delta.vercel.app/api/v1/comment/create-comment', data);
        refetchComment()
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const fetchGetcommentData = async (data) => {
    try {
        const response = await axios.get('https://asssignment-10-server-delta.vercel.app/api/v1/comment/', data);

        return response;
    } catch (error) {

    }
}
import axios from "axios"

export const fetchGetLikeData = async () => {
    try {
        const response = await axios.get('https://asssignment-10-server-delta.vercel.app/api/v1/like');
        return response;
    } catch (error) {

    }
}


export const fetchPostLikeData = async (likeData) => {
    try {
        const response = await axios.post('https://asssignment-10-server-delta.vercel.app/api/v1/like/create-like', likeData);
        return response;
    } catch (error) {

    }
}


export const fetchDeleteLikeData = async (id, refetch) => {
    try {
        const response = await axios.delete(`https://asssignment-10-server-delta.vercel.app/api/v1/like/${id}`);
        refetch();
        return response;
    } catch (error) {

    }
}


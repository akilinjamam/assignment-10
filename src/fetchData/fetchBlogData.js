import axios from "axios"


export const fetchGetBlogData = async () => {
    try {
        const result = await axios.get(`https://asssignment-10-server-delta.vercel.app/api/v1/blogs`)
        return result
    } catch (error) {

    }
}
export const fetchGetBlogDataByQuery = async (value) => {
    try {
        const result = await axios.get(`https://asssignment-10-server-delta.vercel.app/api/v1/blogs?search=${value}`)
        return result
    } catch (error) {

    }
}

export const fetchPostBlogData = async (data) => {
    try {
        const result = await axios.post(`https://asssignment-10-server-delta.vercel.app/api/v1/blogs/create-blog`, data);
        console.log(result)
        return result;
    } catch (error) {

    }
}

export const fetchDeleteBlogData = async (id, refetch) => {
    try {
        const result = await axios.delete(`https://asssignment-10-server-delta.vercel.app/api/v1/blogs/${id}`);
        refetch();
        return result
    } catch (error) {

    }
}


export const fetchUpdateBlogData = async (id, updateData) => {
    try {
        const result = await axios.patch(`https://asssignment-10-server-delta.vercel.app/api/v1/blogs/${id}`, updateData);

        return result;
    } catch (error) {

    }
} 
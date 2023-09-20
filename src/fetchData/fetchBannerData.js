import axios from "axios";


const fetchBannerData = async (id) => {

    if (id) {
        const response = await axios.delete(`https://asssignment-10-server-delta.vercel.app/api/v1/bannerEvents/${id}`);
        const bannerData = response;
        return bannerData;
    }


    const response = await axios.get('https://asssignment-10-server-delta.vercel.app/api/v1/bannerEvents');
    const bannerData = response;

    return bannerData;
}


export default fetchBannerData;


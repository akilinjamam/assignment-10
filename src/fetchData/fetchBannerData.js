import axios from "axios";


const fetchBannerData = async (id) => {

    if (id) {
        const response = axios.delete(`https://asssignment-10-server-production.up.railway.app/api/v1/bannerEvents/${id}`);
        const bannerData = response;
        return bannerData;
    }


    const response = axios.get('https://asssignment-10-server-production.up.railway.app/api/v1/bannerEvents');
    const bannerData = response;
    console.log(bannerData);
    return bannerData;
}


export default fetchBannerData;


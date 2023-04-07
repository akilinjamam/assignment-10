import axios from "axios";


const fetchBannerData = async (id) => {

    if (id) {
        const response = axios.delete(`http://localhost:5000/api/v1/bannerEvents/${id}`);
        const bannerData = response;
        return bannerData;
    }


    const response = axios.get('http://localhost:5000/api/v1/bannerEvents');
    const bannerData = response;
    return bannerData;
}


export default fetchBannerData;


import React, { useState } from 'react';
import ImageModal from '../imageModal/ImageModal';

import { fetchGetUnsplashData } from '../fetchData/fetchUnsplashData';

const Unsplash = () => {

    const [imgData, setImgData] = useState([]);


    const searchImg = async (e) => {
        e.preventDefault();

        const search = e.target.search.value;

        await fetchGetUnsplashData(search)
            .then(res => setImgData(res?.data?.results))
    }
    return (
        <div>
            <ImageModal
                data={imgData} // it containing array of object with 30 pictures according to search result
                search={searchImg} // this is a function which takes input data for searching

            />
        </div>
    );
};

export default Unsplash;
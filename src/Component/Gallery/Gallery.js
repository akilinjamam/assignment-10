import React, { useContext } from 'react';
import './Gallery.css';
import 'aos/dist/aos.css';
import { useQuery } from 'react-query';
import { fetchGetBlogData } from '../../fetchData/fetchBlogData';
import noteContext from '../../Context/noteContext';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const state = useContext(noteContext);
    const navigate = useNavigate();
    const { data: getBlogDataForGallery } = useQuery("getBlogDataForGallery", () => fetchGetBlogData());
    const allBlogs = getBlogDataForGallery?.data?.result;
    const lastOneData = allBlogs && [...allBlogs];


    const handleNavigate = (id) => {
        state.setBlogIdContainer(id);
        navigate(`/blogsNewDetail/${id}`);
    }

    return (
        <div className='galleryMain' >
            <div>
                <p className='title' >BLOGS</p>
            </div>
            <div class="containerrr">
                <div class="gallery-container w-3 h-2">
                    <div class="gallery-item">
                        <div
                            onClick={() => handleNavigate(lastOneData?.slice(lastOneData?.length - 1, lastOneData?.length)?.[0]?._id)}
                            class="image">
                            <img src="https://source.unsplash.com/1600x900/?nature" alt="nature" />
                        </div>
                        <div


                            class="text">{lastOneData?.slice(lastOneData?.length - 1, lastOneData?.length)?.[0]?.title}</div>
                    </div>
                </div>

                <div class="gallery-container w-3 h-2">
                    <div class="gallery-item">
                        <div
                            onClick={() => handleNavigate(lastOneData?.slice(lastOneData?.length - 2, lastOneData?.length - 1)?.[0]?._id)}
                            class="image">
                            <img src="https://source.unsplash.com/1600x900/?people" alt="people" />
                        </div>
                        <div


                            class="text">{lastOneData?.slice(lastOneData?.length - 2, lastOneData?.length - 1)?.[0]?.title}</div>
                    </div>
                </div>

                <div class="gallery-container h-4">
                    <div class="gallery-item">
                        <div
                            onClick={() => handleNavigate(lastOneData?.slice(lastOneData?.length - 3, lastOneData?.length - 2)?.[0]?._id)}
                            class="image">
                            <img src="https://source.unsplash.com/1600x900/?sport" alt="sport" />
                        </div>
                        <div


                            class="text">{lastOneData?.slice(lastOneData?.length - 3, lastOneData?.length - 2)?.[0]?.title}</div>
                    </div>
                </div>

                <div class="gallery-container h-2 w-4">
                    <div class="gallery-item">
                        <div
                            onClick={() => handleNavigate(lastOneData?.slice(lastOneData?.length - 4, lastOneData?.length - 3)?.[0]?._id)}
                            class="image">
                            <img src="https://source.unsplash.com/1600x900/?fitness" alt="fitness" />
                        </div>
                        <div

                            class="text">{lastOneData?.slice(lastOneData?.length - 4, lastOneData?.length - 3)?.[0]?.title}</div>
                    </div>
                </div>

                <div class="gallery-container w-4 h-2">
                    <div
                        onClick={() => handleNavigate(lastOneData?.slice(lastOneData?.length - 5, lastOneData?.length - 4)?.[0]?._id)}
                        class="gallery-item">
                        <div class="image">
                            <img src="https://source.unsplash.com/1600x900/?food" alt="food" />
                        </div>
                        <div

                            class="text">{lastOneData?.slice(lastOneData?.length - 5, lastOneData?.length - 4)?.[0]?.title}</div>
                    </div>
                </div>

                <div class="gallery-container h-4">
                    <div class="gallery-item">
                        <div
                            onClick={() => handleNavigate(lastOneData?.slice(lastOneData?.length - 6, lastOneData?.length - 5)?.[0]?._id)}
                            class="image">
                            <img src="https://source.unsplash.com/1600x900/?travel" alt="travel" />
                        </div>
                        <div

                            class="text">{lastOneData?.slice(lastOneData?.length - 6, lastOneData?.length - 5)?.[0]?.title}</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Gallery;



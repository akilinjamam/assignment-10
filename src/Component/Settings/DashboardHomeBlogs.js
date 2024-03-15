import React, { useState } from 'react';
import './DashboardHomeBlogs.css';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { fetchDeleteBlogData, fetchGetBlogData } from '../../fetchData/fetchBlogData';
import Loading from '../../Loading/Loading';


const DashboardHomeBlogs = () => {

    const navigate = useNavigate();


    const { data: blogDatas, refetch: refetchBlog, isLoading: loadingBlogs } = useQuery("blogDatas", () => fetchGetBlogData());

    const [view, setView] = useState(false)
    const [info, setInfo] = useState('');

    const [id, setId] = useState('');




    const handlePopup = (id, title) => {
        setView(true);
        setInfo(title);

        setId(id);
    };

    const handleDelete = (blogId) => {

        const findDeleteItem = blogDatas?.data?.result?.find(f => {
            return f?._id === blogId
        });

        console.log(findDeleteItem?._id);

        if (findDeleteItem?._id) {
            fetchDeleteBlogData(findDeleteItem?._id, refetchBlog)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        setView(false)

    };

    const handleUpdate = (id) => {
        navigate(`/dashboard/updateBlog/${id}`)
    }



    const handleBlog = () => {
        navigate('/dashboard/addToBlog')
    };

    const handleNavigate = (id) => {
        navigate(`/blogsDetail/${id}`);
    };

    if (loadingBlogs) {
        return <Loading></Loading>
    }
    return (
        <div className='dashboardHome_main'>
            <div className="events">
                <div>
                    <h6>ADD BLOGS</h6>
                    <div className='middle_flex' style={{ width: '200px', height: '200px', border: '1px solid gray', cursor: 'pointer' }} onClick={handleBlog}>
                        <i style={{ color: 'black', paddingBottom: '15px', fontSize: '40px' }} className="uil uil-plus"></i>
                    </div>
                    <hr />
                    <section style={{ flexWrap: 'wrap' }} className="homeEvents_data only_flex">
                        {
                            blogDatas?.data?.result?.map(h => {
                                return (
                                    <div className='homeEvents_data_box'>
                                        <img src={h.blogImg} alt="" />

                                        <div className='homeEvents_data_box_hover_area'>
                                            <p title={h.title} onClick={() => handleNavigate(h._id)}>{h.title.length > 20 ? <span>{h.title.slice(0, 20)}..</span> : <span>{h.title}</span>}</p>
                                        </div>
                                        <i onClick={() => handleUpdate(h._id)} class="uil uil-edit"></i>
                                        <i onClick={() => handlePopup(h._id, h.title)} class="uil uil-trash"></i>
                                    </div>
                                )
                            })
                        }

                    </section>
                </div>

            </div>
            <div className={`${view ? 'block' : 'none'}`}>
                <div className=' deletePopup'>
                    <div className='deletePopup-main'>
                        <div>
                            <p style={{ color: 'white', fontWeight: '400' }}>Are you sure to delete the event " {info} " </p>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <button onClick={() => setView(false)} className='btn btn-primary'>Cancel</button>
                                <button onClick={() => handleDelete(id)} className='btn btn-primary'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHomeBlogs;
import React from 'react';
import './DashboardHomeBlogs.css';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { fetchDeleteBlogData, fetchGetBlogData } from '../../fetchData/fetchBlogData';

const DashboardHomeBlogs = () => {

    const { data: getBlogs, refetch } = useQuery("getBlogs", () => fetchGetBlogData());

    const handleDeleteBlog = async (blogId) => {
        const confirm = window.confirm('Are you sure to delete this item?');

        if (confirm) {
            await fetchDeleteBlogData(blogId, refetch).then(res => {
                console.log(res);
            })
        }
    }

    const allBlogs = getBlogs?.data?.result;

    const navigate = useNavigate();
    return (
        <div className='dashboardHomeMain'>
            <div className="dashboardHomeBlogsContainer">
                <div className="homeEvents">
                    <h6>ADD BLOGS</h6>
                    <div onClick={() => navigate('/dashboard/addToblog')}>
                        <i class="uil uil-plus"></i>
                    </div>

                </div>
                <div className="blogTitles">
                    {
                        allBlogs?.slice()?.reverse()?.map((blogData, index) => {
                            return (
                                <div>
                                    <p className='blogTitle'>{index + 1}. {blogData?.title} <span onClick={() => navigate(`/dashboard/updateBlog/${blogData?._id}`)} className='editBlog'><i class="uil uil-pen"></i></span> <span onClick={() => handleDeleteBlog(blogData?._id)} className='deleteBlog'><i class="uil uil-minus-square"></i></span> </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardHomeBlogs;
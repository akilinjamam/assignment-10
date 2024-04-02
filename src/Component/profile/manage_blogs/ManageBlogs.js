import React, { useContext, useState } from 'react';
import manageBlogs from './Manage_blogs.module.css';
import { useQuery } from 'react-query';
import { fetchDeleteBlogData, fetchGetBlogData } from '../../../fetchData/fetchBlogData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import noteContext from '../../../Context/noteContext';

const ManageBlogs = () => {

    const location = useLocation().pathname;
    const state = useContext(noteContext);
    const setPathName = state.setPathName
    const [view, setView] = useState(false);
    const [id, setId] = useState('')
    const [info, setInfo] = useState('');
    const navigate = useNavigate();
    const { data, refetch } = useQuery('data', () => fetchGetBlogData());
    const [user] = useAuthState(auth)
    const allData = data?.data?.result;


    const handlePopup = (id, title) => {
        setView(true);
        setInfo(title);

        setId(id);
    };


    const handleDelete = (blogId) => {

        const findDeleteItem = allData?.data?.result?.find(f => {
            return f?._id === blogId
        });

        console.log(findDeleteItem?._id);

        if (findDeleteItem?._id) {
            fetchDeleteBlogData(findDeleteItem?._id, refetch)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        setView(false)

    };


    return (
        <div className={manageBlogs.main}>
            <div className={manageBlogs.title}>
                <h4>YOUR BLOGS: {user?.displayName.toUpperCase()}</h4>
                <hr />
                {
                    allData?.filter(f => f?.bloggerEmail === user?.email)?.slice()?.reverse()?.map((datas, index) => {
                        return (
                            <div className={manageBlogs.container}>
                                <div className={manageBlogs.container_1}>
                                    <span>{index + 1} {datas?.title}</span>
                                </div>
                                <div className={`${manageBlogs.container_2} between_flex`}>
                                    {datas?.isApproved ? <span className='text-primary'>APPROVED</span> : <span className='text-danger'>PENDING</span>}
                                    <span style={{ cursor: 'pointer' }} onClick={() => {
                                        navigate(`/profile/updateBlog/${datas?._id}`)
                                        setPathName(location)
                                    }}><i class="uil uil-file-edit-alt"></i></span>
                                    <span onClick={() => handlePopup(datas?._id, datas?.title)} style={{ cursor: 'pointer' }} ><i class="uil uil-trash-alt"></i></span>
                                </div>
                            </div>
                        )
                    })
                }

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

export default ManageBlogs;
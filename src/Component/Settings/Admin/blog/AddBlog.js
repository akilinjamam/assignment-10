import React, { useContext, useRef } from 'react';
import './Addblog.css';
import JoditEditor from 'jodit-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';


import cloudinaryImgHolder from '../../../../cloudinaryImgHolder/CloudinaryImgHolder';

import { fetchPostBlogData } from '../../../../fetchData/fetchBlogData';
import { useLocation, useNavigate } from 'react-router-dom';
import noteContext from '../../../../Context/noteContext';


const AddBlog = () => {

    const state = useContext(noteContext);

    const allInputBlogData = state.allInputBlogData;
    const setAllInputBlogData = state.setAllInputBlogData;

    const setPathName = state.setPathName;
    const addBlogImg = state.addBlogImg;
    const setAddBlogImg = state.setAddBlogImg;

    const navigate = useNavigate();
    const location = useLocation().pathname;

    const user = useAuthState(auth);
    const editor = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(addBlogImg);

        if (addBlogImg) {
            const allblogData = {
                title: allInputBlogData.title,
                blogImg: addBlogImg,
                bloggerName: allInputBlogData.bloggerName,
                bloggerEmail: user?.[0]?.email,
                description: allInputBlogData.description
            }

            await fetchPostBlogData(allblogData).then(res => {
                if (res?.data?.status === 'success') {
                    navigate('/dashboard/dashboardHomeBlogs');
                    setAddBlogImg('');
                    setAllInputBlogData('')
                }
            })
        }
    }


    return (
        <div className='blogMain'>
            <div className='allblogInputFields'>
                <form onSubmit={handleSubmit}>
                    <label className='blogLabel' htmlFor="">Title:</label>
                    <br />
                    <input value={allInputBlogData?.title} name='title' className='blogInput' type="text" required
                        onChange={(e) => setAllInputBlogData({ ...allInputBlogData, title: e.target.value })}
                    />
                    <br />
                    <label className='blogLabel' htmlFor="">Blogger Name:</label>
                    <br />
                    <input value={allInputBlogData.bloggerName} name='bloggerName' className='blogInput' type="text" required
                        onChange={(e) => setAllInputBlogData({ ...allInputBlogData, bloggerName: e.target.value })}
                    />
                    <br />
                    <label className='blogLabel' htmlFor="">Add Image:</label>
                    <br />
                    <input className='blogInput' type="file"
                        onChange={(e) => {
                            const imgFile = e.target.files[0];
                            cloudinaryImgHolder(imgFile, setAddBlogImg)
                        }}
                    />
                    <br />
                    <button onClick={() => {
                        setPathName(location)
                        navigate('/dashboard/unsplash')
                    }} className='btn btn-primary'>Add Unsplash Image</button>
                    <br />
                    <label className='blogLabel' htmlFor="">Add Description:</label>
                    <br />
                    <JoditEditor
                        ref={editor}
                        value={allInputBlogData.content}
                        onBlur={(newContent) => setAllInputBlogData({ ...allInputBlogData, content: newContent })}
                        onChange={(newContent) => setAllInputBlogData({ ...allInputBlogData, description: newContent })}
                    />
                    <br />
                    <button className='btn btn-primary' type='submit'>Post Blog</button>
                </form>
            </div>

        </div>
    );
};

export default AddBlog;
import React, { useContext, useEffect } from 'react';
import './UpdateBlog.css';
import JoditEditor from 'jodit-react';
import { useState } from 'react';
import { useRef } from 'react';
import { useQuery } from 'react-query';
import { fetchGetBlogData, fetchUpdateBlogData } from '../../../../fetchData/fetchBlogData';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import cloudinaryImgHolder from '../../../../cloudinaryImgHolder/CloudinaryImgHolder';
import noteContext from '../../../../Context/noteContext';

const UpdateBlog = () => {

    const location = useLocation().pathname;
    const state = useContext(noteContext);

    const setPathName = state.setPathName;

    const title = state.blogUpdateTitle
    const setTitle = state.setBlogUpdateTitle
    const description = state.blogUpdateDescription
    const setDescription = state.setBlogUpdateDescription
    const content = state.blogUpdatContent
    const setContent = state.setBlogUpdatContent
    const bloggerName = state.blogUpdateBloggerName
    const setBloggerName = state.setBlogUpdateBloggerName
    const updateBlogImg = state.updateBlogImg;
    const setUpdateBlogImg = state.setUpdateBlogImg;

    const navigate = useNavigate();

    const { updateBlogId } = useParams();
    const editor = useRef(null);

    const [img, setImg] = useState('');

    console.log(updateBlogImg)

    const { data: updateBlogs } = useQuery("updateBlogs", () => fetchGetBlogData());
    const allBlogs = updateBlogs?.data?.result;

    const findblogs = allBlogs?.find(f => {
        return f?._id === updateBlogId
    });


    useEffect(() => {
        setTitle(findblogs?.title);
        setBloggerName(findblogs?.bloggerName);
        // setUpdateBlogImg(findblogs?.blogImg);
    }, [findblogs, setTitle, setBloggerName, setUpdateBlogImg])


    const handleSubmit = async (e) => {
        e.preventDefault();


        const updateBlog = {
            title: title,
            bloggerName: bloggerName,
            blogImg: updateBlogImg,
            description: description
        }

        await fetchUpdateBlogData(updateBlogId, updateBlog).then(res => {
            if (res?.data?.status === 'success') {
                navigate('/dashboard/dashboardHomeBlogs')
            }
        })
    }

    return (
        <div className='blogMain'>
            <div className='allblogInputFields'>
                <form onSubmit={handleSubmit}>
                    <label className='blogLabel' htmlFor="">Title:</label>
                    <br />
                    <input value={title} className='blogInput' type="text" required
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <br />
                    <label className='blogLabel' htmlFor="">Blogger Name:</label>
                    <br />
                    <input value={bloggerName} className='blogInput' type="text" required
                        onChange={(e) => {
                            setBloggerName(e.target.value)
                        }}
                    />
                    <br />
                    <label className='blogLabel' htmlFor="">Add Image:</label>
                    <br />
                    <input className='blogInput' type="file"
                        onChange={(e) => {
                            const imgFile = e.target.files[0];
                            // imgbbConverter(imgFile, setImg);
                            cloudinaryImgHolder(imgFile, setUpdateBlogImg)
                        }}
                    />
                    <br />
                    <button onClick={() => {
                        navigate('/dashboard/unsplash');
                        setPathName(location);
                    }} className='btn btn-primary'>Add Unsplash Image</button>
                    <br />
                    <label className='blogLabel' htmlFor="">Add Description:</label>
                    <br />
                    <JoditEditor
                        ref={editor}
                        value={findblogs?.description}
                        onBlur={newContent => setContent(newContent)}
                        onChange={newContent => { setDescription(newContent) }}
                    />
                    <br />
                    <button className='btn btn-primary' type='submit'>Post Blog</button>

                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;
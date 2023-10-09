import React, { useEffect } from 'react';
import './UpdateBlog.css';
import JoditEditor from 'jodit-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useState } from 'react';
import { useRef } from 'react';
import imgbbConverter from '../../../../imgbbCoverter/imgbbConverter';
import { useQuery } from 'react-query';
import { fetchGetBlogData, fetchUpdateBlogData } from '../../../../fetchData/fetchBlogData';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {

    const navigate = useNavigate();

    const { updateBlogId } = useParams();

    const user = useAuthState(auth);
    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const [blogger, setBlogger] = useState('');

    const [content, setContent] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');


    const { data: updateBlogs } = useQuery("updateBlogs", () => fetchGetBlogData());

    const allBlogs = updateBlogs?.data?.result;

    const findblogs = allBlogs?.find(f => {
        return f?._id === updateBlogId
    });

    console.log(findblogs);

    useEffect(() => {
        setTitle(findblogs?.title);
        setBlogger(findblogs?.bloggerName);
        setImg(findblogs?.blogImg);
    }, [findblogs])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateBlog = {
            title: title,
            bloggerName: blogger,
            blogImg: img,
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
                    <input value={blogger} className='blogInput' type="text" required
                        onChange={(e) => {
                            setBlogger(e.target.value)
                        }}
                    />
                    <br />
                    <label className='blogLabel' htmlFor="">Add Image:</label>
                    <br />
                    <input className='blogInput' type="file"
                        onChange={(e) => {
                            const imgFile = e.target.files[0];
                            imgbbConverter(imgFile, setImg);
                        }}
                    />
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
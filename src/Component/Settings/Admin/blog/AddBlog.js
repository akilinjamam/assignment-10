import React, { useRef, useState } from 'react';
import './Addblog.css';
import JoditEditor from 'jodit-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import imgbbConverter from '../../../../imgbbCoverter/imgbbConverter';
import { fetchPostBlogData } from '../../../../fetchData/fetchBlogData';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {

    const navigate = useNavigate();

    const user = useAuthState(auth);
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const allblogData = {
            title: e.target.title.value,
            blogImg: img,
            bloggerName: e.target.bloggerName.value,
            bloggerEmail: user?.[0]?.email,
            description: description
        }



        await fetchPostBlogData(allblogData).then(res => {
            if (res?.data?.status === 'success') {
                navigate('/dashboard/dashboardHomeBlogs');
            }
        })
    }

    return (
        <div className='blogMain'>
            <div className='allblogInputFields'>
                <form onSubmit={handleSubmit}>
                    <label className='blogLabel' htmlFor="">Title:</label>
                    <br />
                    <input name='title' className='blogInput' type="text" required />
                    <br />
                    <label className='blogLabel' htmlFor="">Blogger Name:</label>
                    <br />
                    <input name='bloggerName' className='blogInput' type="text" required />
                    <br />
                    <label className='blogLabel' htmlFor="">Add Image:</label>
                    <br />
                    <input className='blogInput' type="file" required
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
                        value={content}
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

export default AddBlog;
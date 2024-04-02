import React, { useContext, useRef } from 'react';
import { fetchPostBlogData } from '../../../fetchData/fetchBlogData';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import JoditEditor from 'jodit-react';
import cloudinaryImgHolder from '../../../cloudinaryImgHolder/CloudinaryImgHolder';
import noteContext from '../../../Context/noteContext';
import extractTextFromHTML from '../../../extractTextFormHTML/extractTextFromHTML';

const WriteBlogs = () => {

    const state = useContext(noteContext);

    const allInputBlogData = state.allInputBlogData;
    const setAllInputBlogData = state.setAllInputBlogData;


    console.log(allInputBlogData.title)

    const setPathName = state.setPathName;
    const addBlogImg = state.addBlogImg;
    const setAddBlogImg = state.setAddBlogImg;

    const navigate = useNavigate();
    const location = useLocation().pathname;

    const user = useAuthState(auth);
    const editor = useRef(null);



    const text = extractTextFromHTML(editor?.current?.value)

    const handleSubmitBlog = async (e) => {
        e.preventDefault();

        console.log(addBlogImg);

        if (addBlogImg) {
            const allblogData = {
                title: allInputBlogData.title,
                blogImg: addBlogImg,
                bloggerName: allInputBlogData.bloggerName,
                bloggerEmail: user?.[0]?.email,
                description: allInputBlogData.description,
                plainDescription: text
            }

            console.log(allblogData)

            await fetchPostBlogData(allblogData).then(res => {
                if (res?.data?.status === 'success') {
                    navigate('/blogsNew');
                    setAddBlogImg('');
                    setAllInputBlogData('')
                }
            })
        }
    }
    return (
        <div style={{ backgroundColor: 'white' }} className='blogMain'>
            <div className='allblogInputFields'>
                <form onSubmit={handleSubmitBlog}>
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
                        navigate('/writeBlogUnsplash')
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


                    <br />
                    <br />
                    <button onClick={() => navigate('/blogsNew')} className='btn btn-primary' type='submit'>Back</button>
                </form>
            </div>

        </div>
    );
};

export default WriteBlogs;
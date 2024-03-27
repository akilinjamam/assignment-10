import React, { useState } from 'react';
import blogs from './BlogsNew.module.css';
import { useQuery } from 'react-query';
import { fetchGetBlogData } from '../../../fetchData/fetchBlogData';
import LoadingBlog from '../../../Loading/LoadingBlog';
import { fetchGetcommentData, fetchPostcommentData } from '../../../fetchData/fetchCommentData';
import { fetchDeleteLikeData, fetchGetLikeData, fetchPostLikeData } from '../../../fetchData/fetchLikeData';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useBlogs from './useBlogs';
const BlogsNew = () => {

    const [getBlogs, getLikeData, refetch, getCommentData, refetchComment, user] = useBlogs()

    const navigate = useNavigate();

    const allBlogs = getBlogs?.data?.result;
    const [popup, setPopup] = useState(false);
    const [comment, setComment] = useState('');
    const [blogIdContainer, setBlogIdContainer] = useState('');


    const getAllLike = getLikeData?.data?.result;



    const allCommentData = getCommentData?.data?.result;
    console.log(allCommentData)


    const filterCommentData = allCommentData?.filter(f => {
        return f?.blogLink === blogIdContainer;
    })

    const handleLike = async (blogLink) => {
        const likeData = {
            likerEmail: user?.email,
            blogLink: blogLink
        }

        const filterLikedId = getAllLike?.filter(f => {
            return f?.blogLink === blogLink
        })

        const findLikedId = filterLikedId?.find(f => {
            return f?.likerEmail === user?.email
        })


        if (user?.email) {
            if (!findLikedId?.likerEmail) {
                await fetchPostLikeData(likeData)
                    .then(res => {
                        console.log(res)
                        refetch();
                    })
                    .catch(err => console.log(err));
            } else {
                await fetchDeleteLikeData(findLikedId?._id, refetch)
                    .then(res => console.log(res));
            }
        } else {
            navigate('/login')
        }

    }

    const handlePopup = (id) => {
        setBlogIdContainer(id);
        setPopup(true)
    }


    const handleCommentData = async () => {
        const commentData = {
            commenterEmail: user?.email,
            blogLink: blogIdContainer,
            comment,
        }

        if (user?.email) {
            await fetchPostcommentData(commentData, refetchComment).then(res => {
                if (res?.status === 'success') {
                    console.log(res)
                }
                setComment('');
            })
        } else {
            navigate('/login')
        }
    }

    if (getBlogs?.data?.status !== 'success') {
        return <LoadingBlog></LoadingBlog>
    }



    return (
        <div className={blogs.main}>
            <div className={`${blogs.title} between_flex`}>
                <div className={`${blogs.title_input_area} around_flex`}>
                    <i className="uil uil-search"></i>
                    <input type="text" />
                </div>
                <div className={`${blogs.title_icon_part} around_flex`}>
                    <span><i class="uil uil-comment-edit"></i> write</span>
                    <span><i class="uil uil-bell"></i></span>
                </div>
            </div>
            <br />
            <div className={`${blogs.detail}`}>
                {
                    allBlogs?.map(blog => {
                        return (
                            <div className={`${blogs.detail_container}`}>
                                <div className={`${blogs.deatilContainer1}`}>
                                    <div className={`${blogs.detail_container_bloggerName}`}>
                                        <span>{blog.bloggerName} {blog.createdAt?.slice(0, 10)}</span>
                                    </div>
                                    <div onClick={() => navigate(`/blogsNewDetail/${blog._id}`)} className={`${blogs.detail_container_title}`}>
                                        <h3>{blog.title}</h3>
                                    </div>
                                    <div onClick={() => navigate(`/blogsNewDetail/${blog._id}`)} className={`${blogs.detail_container_description}`}>
                                        <p>
                                            পরিবহন খাতেই যে কোন টুরের সব থেকে বেশি ব্যয় হয়। সে জন্য বাসের টিকিট কাটার ক্ষেত্রে বিভিন্ন অ্যাপ গুলো দেখুন, কোন অফার পেয়েও পেয়ে যেতে পারেন। বাংলাদেশ ছাড়া অন্য দেশে গেলে সরকারী পরিবহন গুলো ব্যাবহার করুন এতে খরচ কিছুটা কম হবে। খুব ভালো হয় ট্যাক্সি না ব্যাবহার করে মেট্রো রেল বা বাস ব্যাবহার করুন। ভ্রমনে গেলে হাটার বিকল্প নেই।

                                            ভ্রমনের জন্য আপনি যদি বিমানের কথা চিন্তা করেন তবে চেষ্টা করবেন একটু বেশী আগে টিকিট কাটতে। টিকিট কাটার আগে জনপ্রিয় ট্রাভেল ওয়েব গুলো দেখুন, এখানে অনেক কম দামের অফারে টিকিট পেয়েও যেতে পারেন। বাংলাদেশ থেকে যদি বিমানে কোথাও যেতে চান এবং আপনার যদি মনে হয় টিকিটের দাম একটু বেশি তবে আপনার প্রতিবেশি দেশ গুলোর বিমানের ভাড়াটা চেক করুন। যেখানে লাভ পাবেন সেটাই ব্যাবহার করুন।
                                        </p>
                                    </div>
                                    <span style={{ marginRight: '20px' }}><i class="uil uil-thumbs-up"></i> {
                                        getAllLike?.filter(f => {
                                            return f?.blogLink === blog?._id
                                        })?.length
                                    }
                                    </span>
                                    <span style={{ marginRight: '20px' }}><i class="uil uil-comment"></i> {
                                        allCommentData?.filter(f => {
                                            return f?.blogLink === blog?._id
                                        })?.length
                                    }</span>
                                </div>
                                <div onClick={() => navigate(`/blogsNewDetail/${blog._id}`)} className={`${blogs.deatilContainer2}`}>
                                    <img src={blog.blogImg} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <br />
        </div>
    );
};

export default BlogsNew;
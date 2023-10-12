import React, { useState } from 'react';
import blog from './Blog.module.css';
import { useQuery } from 'react-query';
import { fetchGetBlogData } from '../../fetchData/fetchBlogData';
import { fetchDeleteLikeData, fetchGetLikeData, fetchPostLikeData } from '../../fetchData/fetchLikeData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const Blogs = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { data: getBlogs } = useQuery("getBlogs", () => fetchGetBlogData());
    const allBlogs = getBlogs?.data?.result;
    const [popup, setPopup] = useState(false);

    const { data: getLikeData, refetch } = useQuery("getLikeData", () => fetchGetLikeData());
    const getAllLike = getLikeData?.data?.result;

    console.log(getAllLike)


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

    if (getBlogs?.data?.status !== 'success') {
        return (
            <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className={blog.main}>
            <section className={blog.blogPart}>
                {
                    allBlogs?.slice()?.reverse()?.map(blogData => {
                        return (
                            <div key={blogData?._id} className={blog.blogContainer}>
                                <img src={blogData?.blogImg} alt="" />
                                <div className={blog.detailPart}>
                                    <h5>{blogData.title}</h5>
                                    <br />
                                    <p dangerouslySetInnerHTML={{ __html: blogData.description }}></p>
                                    <br />
                                    <br />
                                    <span style={{ marginRight: '20px' }}><i class="uil uil-thumbs-up"></i> {
                                        getAllLike?.filter(f => {
                                            return f?.blogLink === blogData?._id
                                        })?.length
                                    }
                                    </span>
                                    <span style={{ marginRight: '20px' }}><i class="uil uil-comment"></i> 0</span>
                                    <span><i class="uil uil-share"></i></span>
                                    <br />
                                    <br />
                                    <div className={blog.likeComment}>
                                        <section className={blog.like}>
                                            <div
                                                onClick={() => handleLike(blogData?._id)}
                                                style={{ cursor: 'pointer' }}
                                                className={
                                                    (getAllLike?.filter(f => {
                                                        return f?.blogLink === blogData?._id
                                                    })?.find(f => {
                                                        return f?.likerEmail === user?.email
                                                    }))

                                                        ?
                                                        'text-primary'
                                                        :
                                                        'text-dark'
                                                }
                                            >
                                                <span style={{ marginRight: '10px', fontSize: '16px' }}><i class="uil uil-thumbs-up"></i></span>
                                                <span>Like</span>
                                            </div>
                                        </section>
                                        <section className={blog.comment}>
                                            <div
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => setPopup(true)}
                                            >
                                                <span style={{ marginRight: '10px', fontSize: '16px' }}><i class="uil uil-comment"></i></span>
                                                <span>Comment</span>
                                            </div>
                                        </section>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <div className={popup ? `${blog.block}` : `${blog.none}`}>
                <div className={blog.commentPopup}>
                    <div className={blog.commentContainer}>
                        <i
                            onClick={() => setPopup(false)}
                            className={`uil uil-times-circle ${blog.cancelComment}`}></i>
                        <div className={blog.commentDetail}>

                        </div>
                        <div className={blog.sendComment}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
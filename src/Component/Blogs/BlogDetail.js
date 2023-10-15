import React, { useContext, useState } from 'react';
import blog from './Blog.module.css';
import { fetchGetcommentData, fetchPostcommentData } from '../../fetchData/fetchCommentData';
import { fetchDeleteLikeData, fetchGetLikeData, fetchPostLikeData } from '../../fetchData/fetchLikeData';
import { useQuery } from 'react-query';
import { fetchGetBlogData } from '../../fetchData/fetchBlogData';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import noteContext from '../../Context/noteContext';
import LoadingBlog from '../../Loading/LoadingBlog';

const BlogDetail = () => {
    const { blogId } = useParams();
    const state = useContext(noteContext)
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { data: getBlogs } = useQuery("getBlogs", () => fetchGetBlogData());
    const allBlogs = getBlogs?.data?.result;
    const [popup, setPopup] = useState(false);
    const [comment, setComment] = useState('');
    const [blogIdContainer, setBlogIdContainer] = useState('');

    const filteredBlog = allBlogs?.filter(f => {
        return f?._id === blogId
    })

    const { data: getLikeData, refetch } = useQuery("getLikeData", () => fetchGetLikeData());
    const getAllLike = getLikeData?.data?.result;

    const { data: getCommentData, refetch: refetchComment } = useQuery("getCommentData", () => fetchGetcommentData());

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
        <div className={blog.main}>
            <section className={blog.blogPart}>
                {
                    filteredBlog?.slice()?.reverse()?.map(blogData => {
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
                                    <span style={{ marginRight: '20px' }}><i class="uil uil-comment"></i> {
                                        allCommentData?.filter(f => {
                                            return f?.blogLink === blogData?._id
                                        })?.length
                                    }</span>
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
                                                onClick={() => handlePopup(blogData?._id)}
                                            >
                                                <span style={{ marginRight: '10px', fontSize: '16px' }}><i class="uil uil-comment"></i></span>
                                                <span>Comment</span>
                                            </div>
                                        </section>
                                    </div>
                                    <hr />
                                    <p
                                        style={{ color: 'blue', fontSize: '13px', fontStyle: 'italic', cursor: 'pointer' }}
                                        onClick={() => navigate('/blogs')}>view more blogs</p>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <div className={popup ? `${blog.block}` : `${blog.none}`}>
                <div className={blog.commentPopup}>
                    <div className={blog.commentContainer}>

                        <div className={blog.commentDetail}>
                            {
                                filterCommentData?.map((cData, index) => {
                                    return (
                                        <div>
                                            <p>{index + 1}. {cData?.commenterEmail}</p>
                                            <p>{cData?.comment}</p>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={blog.sendComment}>
                            <input className={blog.sendCommentInput} type="text"
                                onChange={(e) => {
                                    setComment(e.target.value);
                                }}
                                value={comment}
                            />
                            {
                                comment &&
                                <i onClick={handleCommentData} style={{ cursor: 'pointer' }} className="uil uil-message fs-2 text-dark-emphasis"></i>
                            }
                        </div>
                        <br />
                        <button
                            onClick={() => setPopup(false)}
                            className={`btn btn-primary ${blog.cancelComment}`}>
                            cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
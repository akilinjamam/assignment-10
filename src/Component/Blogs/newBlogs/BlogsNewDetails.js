import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import blogDetails from './BlogsNewDetails.module.css';
import useBlogs from './useBlogs';
import { fetchPostcommentData } from '../../../fetchData/fetchCommentData';
import LoadingBlog from '../../../Loading/LoadingBlog';
import { fetchDeleteLikeData, fetchPostLikeData } from '../../../fetchData/fetchLikeData';
const BlogsNewDetails = () => {

    const [popup, setPopup] = useState(false);
    const [blogIdContainer, setBlogIdContainer] = useState();
    const [comment, setComment] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [getBlogs, getLikeData, refetch, getCommentData, refetchComment, user] = useBlogs();
    const findBlogs = getBlogs?.data?.result?.find(f => {
        return f?._id === id
    });


    const allCommentData = getCommentData?.data?.result;
    const filterCommentData = allCommentData?.filter(f => {
        return f?.blogLink === blogIdContainer;
    })

    const getAllLike = getLikeData?.data?.result;

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
        <div className={blogDetails.main}>
            <div className={blogDetails.bogDetails_container}>
                <h2>{findBlogs?.title}</h2>
                <br />
                <p>{findBlogs?.bloggerName}</p>
                <p>Publishid Date: {findBlogs?.createdAt?.slice(0, 10)}</p>
                <hr />
                <span
                    onClick={() => handleLike(findBlogs?._id)}
                    style={{ marginRight: '20px', color: 'gray' }}
                    className={
                        (getAllLike?.filter(f => {
                            return f?.blogLink === findBlogs?._id
                        })?.find(f => {
                            return f?.likerEmail === user?.email
                        }))

                            ?
                            'text-primary'
                            :
                            'text-gray'
                    }
                ><i class="uil uil-thumbs-up"></i> {
                        getAllLike?.filter(f => {
                            return f?.blogLink === findBlogs?._id
                        })?.length
                    }
                </span>
                <span
                    style={{ marginRight: '20px', color: 'gray' }}
                    onClick={() => handlePopup(findBlogs?._id)}
                ><i class="uil uil-comment"></i> {
                        allCommentData?.filter(f => {
                            return f?.blogLink === findBlogs?._id
                        })?.length
                    }</span>
                <hr />
                <br />
                <div className={`${blogDetails?.blogsDetail_image}`}>
                    <img src={findBlogs?.blogImg} alt="" />
                </div>
                <br />
                <p dangerouslySetInnerHTML={{ __html: findBlogs?.description }}></p>
            </div>
            <div className={popup ? `${blogDetails.block}` : `${blogDetails.none}`}>
                <div className={blogDetails.commentPopup}>
                    <div className={blogDetails.commentContainer}>

                        <div className={blogDetails.commentDetail}>
                            {
                                filterCommentData?.map((commentData, index) => {
                                    return (
                                        <div>
                                            <p>{index + 1}. {commentData?.commenterEmail}</p>
                                            <p>{commentData?.comment}</p>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={blogDetails.sendComment}>
                            <input className={blogDetails.sendCommentInput} type="text"
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
                            className={`btn btn-primary ${blogDetails.cancelComment}`}>
                            cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsNewDetails;
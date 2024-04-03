import blogs from './BlogsNew.module.css';
import LoadingBlog from '../../../Loading/LoadingBlog';
import { useNavigate } from 'react-router-dom';
import useBlogs from './useBlogs';
import ImageComponent from '../../../blur-image/ImageComponent';
import { useEffect, useState } from 'react';
import { fetchGetBlogDataByQuery } from '../../../fetchData/fetchBlogData';
const BlogsNew = () => {

    const { getBlogs, getLikeData, getCommentData } = useBlogs();
    const [filteredData, setFilteredData] = useState([]);
    console.log(filteredData)
    const [filterValue, setFilterValue] = useState();
    const navigate = useNavigate();

    const allBlogs = getBlogs?.data?.result;
    const getAllLike = getLikeData?.data?.result;
    const allCommentData = getCommentData?.data?.result;


    useEffect(() => {
        const getQueryFunction = async () => {
            const result = await fetchGetBlogDataByQuery(filterValue);
            console.log(result)
            setFilteredData(result?.data?.result)
        };
        getQueryFunction();
    }, [filterValue])

    if (getBlogs?.data?.status !== 'success') {
        return <LoadingBlog></LoadingBlog>
    }

    const showSuggesion = () => {
        return filterValue?.length > 0 ? 'block' : 'none'
    }

    return (
        <div className={blogs.main}>
            <div className={`${blogs.title} between_flex`}>
                <div className={`${blogs.title_input_area} around_flex`}>
                    <i className="uil uil-search"></i>
                    <input type="text"
                        onChange={(e) => setFilterValue(e.target.value)}
                    />
                </div>
                <div className={`${blogs.title_icon_part} around_flex`}>
                    <span><i onClick={() => navigate('/writeBlog')} class="uil uil-comment-edit"></i> write</span>
                </div>
                <div className={`${blogs.search_suggesion}`} style={{ display: showSuggesion() }}>
                    {
                        filteredData?.length > 0 ?
                            filteredData?.map(data => {
                                return (
                                    <p>{data?.title}</p>
                                )
                            })
                            :
                            <p>did not matched</p>
                    }
                </div>
            </div>
            <br />
            <div className={`${blogs.detail}`}>
                {
                    allBlogs?.filter(f => f?.isApproved).slice()?.reverse()?.map(blog => {
                        return (
                            <div className={`${blogs.detail_container}`}>
                                <div className={`${blogs.deatilContainer1}`}>
                                    <div className={`${blogs.detail_container_bloggerName}`}>
                                        <span>{blog.bloggerName} {blog.createdAt?.slice(0, 10)}</span>
                                    </div>
                                    <div className={`${blogs.detail_container_title}`}>
                                        <h3>{blog.title}</h3>
                                    </div>
                                    <div
                                        className={`${blogs.detail_container_description}`}>
                                        {
                                            blog?.plainDescription?.length > 550 ?
                                                <p>{blog?.plainDescription?.slice(0, 550)} <span
                                                    onClick={() => navigate(`/blogsNewDetail/${blog._id}`)}
                                                    style={{ color: 'blue', cursor: 'pointer' }}
                                                >...read more</span></p>
                                                :
                                                <p>{blog?.plainDescription}</p>
                                        }

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
                                    {/* <img src={blog.blogImg} alt="" /> */}
                                    <ImageComponent src={blog.blogImg} width='100%' height={360} />
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

import { useQuery } from 'react-query';
import { fetchGetBlogData } from '../../../fetchData/fetchBlogData';
import { fetchGetLikeData } from '../../../fetchData/fetchLikeData';
import { fetchGetcommentData } from '../../../fetchData/fetchCommentData';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const useBlogs = () => {
    const [user] = useAuthState(auth);
    const { data: getBlogs } = useQuery("getBlogs", () => fetchGetBlogData());
    const { data: getLikeData, refetch } = useQuery("getLikeData", () => fetchGetLikeData());
    const { data: getCommentData, refetch: refetchComment } = useQuery("getCommentData", () => fetchGetcommentData());

    return [getBlogs, getLikeData, refetch, getCommentData, refetchComment, user]
};

export default useBlogs;
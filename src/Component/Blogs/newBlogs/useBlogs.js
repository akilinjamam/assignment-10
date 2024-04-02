
import { useQuery } from 'react-query';
import { fetchGetBlogData } from '../../../fetchData/fetchBlogData';
import { fetchGetLikeData } from '../../../fetchData/fetchLikeData';
import { fetchGetcommentData } from '../../../fetchData/fetchCommentData';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import fetchUserControllData from '../../../fetchData/fetchUserControllData';

const useBlogs = () => {
    const [user] = useAuthState(auth);
    const { data: getUser } = useQuery("getUser", () => fetchUserControllData());
    const { data: getBlogs } = useQuery("getBlogs", () => fetchGetBlogData());
    const { data: getLikeData, refetch } = useQuery("getLikeData", () => fetchGetLikeData());
    const { data: getCommentData, refetch: refetchComment } = useQuery("getCommentData", () => fetchGetcommentData());

    const allUser = getUser?.data?.result

    const findAdmin = allUser?.find(f => {
        return f?.email === user?.email
    })?.userRoll;


    return { getBlogs, getLikeData, refetch, getCommentData, refetchComment, user, findAdmin }
};

export default useBlogs;
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import { useQuery } from "react-query";
import fetchUserControllData from "../../fetchData/fetchUserControllData";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);


    const { data: queryUserControlForAuthAdmin } = useQuery("queryUserControlForAdmin", () => fetchUserControllData());


    const findUser = queryUserControlForAuthAdmin?.data?.result?.find(q => {
        return q?.email === user?.email
    });



    const location = useLocation();



    if (loading) {
        return <Loading></Loading>
    }

    if (findUser?.userRoll === 'normal' || findUser?.userRoll === 'editor' || !user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }


    return children
};

export default RequireAdmin;
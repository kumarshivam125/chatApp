import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const ProtectedRoute=({children})=>{
    const {token}=useSelector(state=>state.user);
    if(token)
        return children
    else
        return <Navigate to='/login'/>
}
export default ProtectedRoute;

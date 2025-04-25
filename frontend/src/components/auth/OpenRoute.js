import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const OpenRoute=({children})=>{
    const {token}=useSelector(state=>state.user);
    if(!token)
        return children
    else
        return <Navigate to='/message'/>
}
export default OpenRoute;
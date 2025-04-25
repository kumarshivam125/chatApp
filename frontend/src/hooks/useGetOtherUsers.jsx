import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../App"
import { useDispatch, useSelector } from "react-redux"
import { setOtherUser } from "../redux/userSlice"

const useGetOtherUsers=()=>{
    const dispatch=useDispatch();
    const {token}=useSelector(state=>state.user);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const resp=await axios.post(BASE_URL+"/api/v1/user/getOtherUser",{},{headers:{Authorization:`Bearer ${token}`}});
                // console.log("Find other user API  Resp--",resp);
                dispatch(setOtherUser(resp?.data?.otherUser))
            }
            catch(err){
                console.log("Error in get other users Hook",err.response.data);
            }
        }
        fetchData();
    },[])
}
export default useGetOtherUsers;
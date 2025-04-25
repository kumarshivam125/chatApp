import { useEffect } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../redux/messageSlice";
import axios from "axios";
import { BASE_URL } from "../App";
const useGetMessages=()=>{
    const dispatch=useDispatch();
    const {selectedUser} =useSelector(state=>state.user);
    const {token}=useSelector(state=>state.user);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const resp=await axios.post(BASE_URL+`/api/v1/message/getMessage/${selectedUser._id}`,{},
                    {headers:{Authorization:`Bearer ${token}`}});
                console.log("GET messages API respon-->",resp);
                console.log("Array-->",resp.data?.allMessages?.messages);
                dispatch(setMessages(resp.data?.allMessages?.messages))
            }
            catch(err){
                console.log("Error in useGetMessages"+err.message);
            }
        }
        fetchData();
    },[selectedUser])
}
export default useGetMessages;
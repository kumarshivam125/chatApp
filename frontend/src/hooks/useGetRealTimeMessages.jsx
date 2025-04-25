import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../redux/messageSlice";

const useGetRealTimeMessages=()=>{
    const dispatch=useDispatch();
    const {messages}=useSelector(state=>state.message);
    const {socket}=useSelector(state=>state.socket);
    useEffect(()=>{
        socket?.on('newMessage',(newMessage)=>{
            if(messages)
                dispatch(setMessages([...messages,newMessage]));            
            else 
                dispatch(setMessages([newMessage]));
        })
        return () => socket?.off("newMessage");
    },[messages])
}
export default useGetRealTimeMessages;
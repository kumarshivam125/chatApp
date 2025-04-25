import { useEffect, useRef } from "react";
import {useSelector} from "react-redux";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import useGetRealTimeMessages from "../hooks/useGetRealTimeMessages";
const Messages=()=>{
    useGetMessages();
    useGetRealTimeMessages();
    const {messages}=useSelector(state=>state.message);
    // console.log("MEssageSSS",messages);
    return (
        <div className="overflow-auto ">
            {
                messages?.length!=0 && messages?.map((msg)=>(
                    <Message key={msg?._id} obj={msg}/>
                ))
            }
        </div>
    )
}
export default Messages;
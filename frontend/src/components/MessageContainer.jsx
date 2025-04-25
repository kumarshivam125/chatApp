import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../App";
import { useState } from "react";
import Messages from "./Messages";
import { setMessages } from "../redux/messageSlice";
import { IoSend } from "react-icons/io5";
const MessageContainer = () => {
    const { onlineUsers, authUser, selectedUser } = useSelector(state => state.user);
    const isOnline = onlineUsers?.includes(selectedUser?._id);
    const [message, setMessage] = useState("");
    const { token } = useSelector(state => state.user);
    const dispatch=useDispatch();
    const {messages}=useSelector(state=>state.message);
    async function sendMessageHandler() {
        if(!message) return;
        try {
            const resp = await axios.post(BASE_URL + `/api/v1/message/sendMessage/${selectedUser._id}`, { message },
                { headers: { Authorization: `Bearer ${token}` } });
            console.log("Send message API resp-->",resp?.data);
            console.log("message",resp?.data?.newMessage);
            if(messages)
                dispatch(setMessages([...messages,resp?.data?.newMessage]));
            else 
                dispatch(setMessages([resp?.data?.newMessage]));
            setMessage('');
        }
        catch (err) {
            console.log("Send message API Error",err);
        }
    }
    return (
        <>
            {
                selectedUser ?
                    <div className="min-w-[450px] h-[400px] flex flex-col justify-between">
                        <div className="bg-gray-800 flex justify-between items-center px-3 py-1 text-white ">
                            <div className={`avatar ${isOnline ? "avatar-online" : ''} `}>
                                <div className="w-10 rounded-full">
                                    <img src={selectedUser?.profilePhoto} />
                                </div>
                            </div>
                            <p>{selectedUser?.fullName}</p>
                        </div>
                        <Messages />
                        <div className="bg-gray-800 flex justify-between items-center px-3 py-1 text-white">
                            <input
                                type="text"
                                className="w-full bg-gray-800 outline-none" onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                            
                            <IoSend className="text-white text-[20px] cursor-pointer " onClick={sendMessageHandler} />
                        </div>
                    </div>
                :(
                    <div className="min-w-[450px] h-[400px]  flex justify-center items-center flex-col">
                        <h1 className="font-bold text-[30px]">Hi {authUser?.fullName}</h1>
                        <p>Lets Start Conversation</p>
                    </div>
                )
            }
        </>
    )
}
export default MessageContainer;
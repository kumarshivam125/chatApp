import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const Message = ({ obj }) => {
    const divRef = useRef();
    useEffect(() => {
        divRef.current.scrollIntoView({ behaviour: "smooth" });
    }, [divRef])
    const {selectedUser,authUser}=useSelector(state=>state.user);
    // console.log("IN Message",obj)
    return (
        <div ref={divRef}>
            <div className={`chat ${obj.senderId==authUser._id?"chat-end":"chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={`${obj.senderId==authUser._id?authUser.profilePhoto:selectedUser.profilePhoto}`}
                        />
                    </div>
                </div>
                <div className="chat-bubble text-white px-4">{obj.message}</div>
            </div>
        </div>
    )
}
export default Message;
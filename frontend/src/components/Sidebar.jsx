import { useDispatch, useSelector } from "react-redux";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import toast from "react-hot-toast";
import { setAuthUser, setOnlineUsers, setOtherUser, setSelectedUser, setToken } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    useGetOtherUsers();
    const { otherUser,selectedUser ,onlineUsers} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function logOutHandler() {
        try {
            dispatch(setToken(null));
            dispatch(setOtherUser([]));
            dispatch(setOnlineUsers([]));
            dispatch(setSelectedUser(null));
            dispatch(setAuthUser(null));
            localStorage.clear();
            toast.success("Logged Out successful");
            navigate("/");
        }
        catch (err) {
            toast.error("Error in LogOut");
        }
    }
    function selectUserHandler(user){
        dispatch(setSelectedUser(user));
        localStorage.setItem("selectedUser",JSON.stringify(user));
    }   
    return (
        <div className="min-w-[200px] flex flex-col justify-between border-r border-r-gray-800   px-2">
            <div className="flex flex-col gap-y-2">
                {
                    otherUser?.map((obj) => (
                        <div className={`flex justify-between items-center px-2 py-1 ${selectedUser?._id==obj?._id?'bg-gray-800 text-white': 'bg-white '} hover:bg-gray-800 hover:text-white  gap-x-2 cursor-pointer`} key={obj?._id} 
                        onClick={()=>selectUserHandler(obj)}>
                            <div className={`avatar ${onlineUsers.includes(obj?._id)?'avatar-online':''} `}>
                                <div className="w-10 rounded-full">
                                    <img src={obj?.profilePhoto}/>
                                </div>
                            </div>
                            <p>{obj?.fullName}</p>
                        </div>
                    ))
                }
            </div>
            <button className="bg-yellow-400 font-bold rounded-md py-1 my-2" onClick={logOutHandler}>Logout</button>
        </div>
    )
}
export default Sidebar;
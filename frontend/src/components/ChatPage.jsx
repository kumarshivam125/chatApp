import MessageContainer from "./MessageContainer"
import Sidebar from "./Sidebar"

export const ChatPage=()=>{
    return(
        <div className="bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 p-4 
            text-black flex gap-x-2 min-h-[300px] mt-[10%] mb-[100px]"> 
            <Sidebar/>
            <MessageContainer/>
        </div>
    )
}
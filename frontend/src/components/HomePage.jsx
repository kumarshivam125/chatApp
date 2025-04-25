import MessageContainer from "./MessageContainer"
import Sidebar from "./Sidebar"
import img from "../assets/banner.png";
import img1 from "../assets/banner2.png";
import img2 from "../assets/banner3.png"
import { Link } from "react-router-dom";
export const HomePage = () => {
    return (
        <div className="py-[100px] max-w-[1100px]">
            <div className="flex">
                <div className="text-black">
                    <h1 className="font-extrabold text-[40px]">Stay Connected, Anytime, Anywhere</h1>
                    <p className="font-semibold  text-[27px]">Chat effortlessly with friends and family<br />no matter the distance.</p>
                    {/* <div className="flex gap-x-5 ">
                        <Link to='/signup'><button className="bg-yellow-400 font-extrabold  px-10 rounded-full  py-3 my-2">SignUp</button></Link>
                        <Link to='/login'><button className="bg-yellow-400 font-extrabold  px-10 rounded-full py-3 my-2">Login</button></Link>
                    </div> */}
                </div>
                <div className="border-[2px] border-black rounded-lg " style={{ backgroundImage: `url(${img})`, height: '400px', width: '700px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

            </div>
            <div className="flex  mt-7 gap-x-10 text-black">
                <div className="border-[2px] border-black rounded-lg " style={{ backgroundImage: `url(${img1})`, height: '400px', width: '500px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="w-[40%]">
                    <h1 className="font-bold text-[27px]">Real-Time Messaging</h1>
                    <p className="font-medium text-[20px] ">Experience instant communication with real-time messaging. Send and receive messages instantly, and never miss a moment. Stay in the loop, whether you're at home or on the go.</p>
                </div>
            </div>
            {/* <div className="border-[2px] border-black rounded-lg mt-7 " style={{ backgroundImage: `url(${img2})`, height: '500px', width: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div> */}
        </div>
    )
}
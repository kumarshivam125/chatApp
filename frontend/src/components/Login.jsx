import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser, setToken } from "../redux/userSlice";
import img from "../assets/img1.png";
export const Login = () => {
    const [userData, setUserData] = useState({
        userName: "",
        password: "",
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(userData);
        try {
            const resp = await axios.post("http://localhost:4000/api/v1/user/login", userData);
            console.log("Login API Response", resp);
            toast.success("Logged in Successfully");
            dispatch(setToken(resp?.data?.token));
            dispatch(setAuthUser(resp?.data?.user));
            localStorage.setItem("token", JSON.stringify(resp?.data?.token));
            localStorage.setItem("authUser", JSON.stringify(resp?.data?.user));
            navigate("/message");
        }
        catch (err) {
            toast.error(err.response?.data?.message);
            console.log("Error in Login Frontend-->", err.response?.data);
        }
        setUserData({
            userName: "",
            password: "",
        })
    }
    const changeHandler = (e) => {
        setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    return (
        <div className="py-[80px] max-w-[1100px] flex gap-x-[100px] mt-8 ">
            <div className="p-4 text-black">
                <h1 className="font-extrabold  text-[30px]">Welcome Back,<br/>Resume Your Journey</h1>
                {/* <p className="font-bold text-[26px]">Resume Your Journey</p> */}
                <form onSubmit={submitHandler} className="">
                    <div className="flex gap-x-2 my-2">
                        <p className="font-semibold text-[20px]">User Name</p>
                        <input type="text" onChange={changeHandler} name="userName" value={userData.userName} className="bg-gray-300 rounded-md outline-none px-2 py-1 " />
                    </div>
                    <div className="flex gap-x-2 my-2">
                        <p className="font-semibold text-[20px]">Password</p>
                        <input type="password" onChange={changeHandler} name="password" value={userData.password} className="bg-gray-300 rounded-md outline-none px-2 py-1 " />
                    </div>
                    <button type="submit" className="bg-yellow-400 font-bold w-full rounded-md py-1 my-2">Login</button>
                    <div className="flex gap-x-2 justify-center mt-2">
                        <p className="text-[12px] font-semibold   ">Dont Have Account</p>
                        <Link to='/signup' className="text-[11px] underline font-bold text-blue-950   ">Signup</Link>
                    </div>
                </form>

            </div>
            <div className="border-[2px] border-black rounded-lg " style={{ backgroundImage: `url(${img})`, height: '500px', width: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
    )
}
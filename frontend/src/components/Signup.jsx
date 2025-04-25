import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";
import img from "../assets/img1.png";
import toast from "react-hot-toast";
export const Signup = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fullName: "",
        userName: "",
        password: "",
        gender: "male"
    })
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(userData);
        try {
            const resp = await axios.post("http://localhost:4000/api/v1/user/signup", userData);
            console.log("Signup API Response", resp);
            toast.success("Account Created Successfully");
            navigate("/login");
        }
        catch (err) {
            toast.error("Error-",err?.response?.data);
            console.log("Error in SignUp Frontend-->", err.response?.data);
        }
        setUserData({
            fullName: "",
            userName: "",
            password: "",
            gender: "male"
        })
    }
    const changeHandler = (e) => {
        setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    return (
        <div className="py-[80px] max-w-[1100px] flex gap-x-[100px] mt-4">
            <div className=" text-black">
                <h1 className="font-extrabold  text-[30px]">Hi, <br/> Start Up Your Journey</h1>
                <form onSubmit={submitHandler} className="">
                    <div className="flex gap-x-2 my-2">
                        <p className="font-semibold text-[20px]">Full Name</p>
                        <input type="text" onChange={changeHandler} name="fullName" value={userData.fullName} className="bg-gray-300 rounded-md outline-none px-2 py-1 " />
                    </div>

                    <div className="flex gap-x-2 my-2">
                        <p className="font-semibold text-[20px]">User Name</p>
                        <input type="text" onChange={changeHandler} name="userName" value={userData.userName} className="bg-gray-300 rounded-md outline-none px-2 py-1 " />
                    </div>
                    <div className="flex gap-x-2 my-2">
                        <p className="font-semibold text-[20px]">Password</p>
                        <input type="password" onChange={changeHandler} name="password" value={userData.password} className="bg-gray-300 rounded-md outline-none px-2 py-1 " />
                    </div>
                    <div className="flex gap-x-3 my-2">
                        <div className="flex gap-x-2">
                            <input type="checkbox" checked={userData.gender == "male"} onChange={changeHandler} className="checkbox checkbox-success" name="gender" value="male" />
                            <label>Male</label>
                        </div>
                        <div className="flex gap-x-2">
                            <input type="checkbox" checked={userData.gender == "female"} onChange={changeHandler} className="checkbox checkbox-success" name="gender" value="female" />
                            <label>Female</label>
                        </div>
                    </div>
                    <button type="submit" className="bg-yellow-400 font-bold w-full rounded-md py-1 my-2">Signup</button>
                    <div className="flex gap-x-2 justify-center">
                        <p className="text-[12px] font-semibold   ">Dont Have Account</p>
                        <Link to='/login' className="text-[11px] underline font-bold text-blue-950">Login</Link>
                    </div>
                </form>
            </div>

            <div className="border-[2px] border-black rounded-lg " style={{backgroundImage:`url(${img})`,height:'500px',width:'400px',backgroundSize:'cover',backgroundPosition:'center'}}></div>
        </div>
    )
}
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useSelector } from "react-redux";
const Navbar = () => {
    const { authUser } = useSelector(state => state.user);
    return (
        <div className='bg-gray-300 h-[80px] fixed w-full'>
            <div className='mx-auto  max-w-[1100px]'>
                <div className="flex justify-between items-center mt-2">
                    <Link to='/'><img src={logo} className='w-[60px] h-[60px]' /></Link>
                    {
                        !authUser ?
                            (
                                <div className="flex gap-x-5 ">
                                    <Link to='/signup'><button className="bg-yellow-400 font-extrabold  px-10 rounded-full text-black  py-3 my-2">SignUp</button></Link>
                                    <Link to='/login'><button className="bg-yellow-400 font-extrabold  px-10 rounded-full text-black py-3 my-2">Login</button></Link>
                                </div>
                            ) :
                            (
                                <Link to='/message'>
                                    <div className="h-[50px] w-[50px] outline outline-[1px] text-[20px] font-bold bg-white text-black flex justify-center items-center rounded-full">
                                        {authUser?.fullName[0]}
                                    </div>
                                </Link>
                            )
                    }

                </div>

            </div>
        </div>
    )
}
export default Navbar;
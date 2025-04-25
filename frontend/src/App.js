import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Toaster } from "react-hot-toast";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from "socket.io-client";
import { setSocket } from './redux/socketSlice';
import { setOnlineUsers } from './redux/userSlice';
import { ChatPage } from './components/ChatPage';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import OpenRoute from './components/auth/OpenRoute';

export const BASE_URL = "http://localhost:4000";
function App() {
  const { authUser } = useSelector(state => state.user);
  const { socket } = useSelector(state => state.socket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authUser) {
      const socketio = io(BASE_URL, {
        query: {
          userId: authUser?._id
        }
      })
      socketio.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
        console.log("ONLINE users", onlineUsers);
      })
      dispatch(setSocket(socketio));
      return () => socketio.close();
    }
  }, [authUser])
  return (
    <>
      <Navbar/>
      <div className=" flex items-center  justify-center bg-[#4AA8D8]  ">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/message' element={<ProtectedRoute> <ChatPage /> </ProtectedRoute> } />
          <Route path='/login' element={<OpenRoute><Login /></OpenRoute> } />
          <Route path='/signup' element={<OpenRoute><Signup /></OpenRoute> } />
          <Route path='*' element={<div>Error Page</div>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

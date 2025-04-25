const express=require('express');
require('dotenv').config();

const PORT=process.env.PORT||8000;
const dbConnect=require('./config/database');
const cors=require('cors');
// const app=express();
const {app,server}=require('./socket/socket1');
const userRoute=require('./routes/userRoute');
const messageRoute=require('./routes/messageRoute');
const path=require('path');

dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use('/api/v1/user',userRoute);
app.use('/api/v1/message',messageRoute);


//-----------------Deployment---------------------------
// const __dirname1 = path.resolve();
// app.use(express.static(path.join(__dirname1, '/frontend/dist')));
// app.get('*', (req, resp) => {
//     resp.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"))
// })

//-----------------Deployment---------------------------

server.listen(PORT,()=>console.log("SERVER Started ",PORT));


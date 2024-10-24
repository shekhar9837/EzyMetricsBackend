
import express from 'express';
import connectDB from './src/db/db.js';
import apiRoutes from './src/routes/apiRoutes.js';
import 'dotenv/config'


const app = express();
app.use(express.json())
const PORT = process.env.PORT;




app.use('/api', apiRoutes);





app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})
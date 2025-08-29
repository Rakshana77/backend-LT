import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import itemRoutes from './routes/itemRoutes.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/items', itemRoutes)
//db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('mongodb connected')
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error("DB error:", err));
   
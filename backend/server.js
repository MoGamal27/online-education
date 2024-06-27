require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')


const app = express();


app.use(express.json());

// MongoDB Connection
const url = process.env.MONGO_URL;
mongoose.connect(url).then(() => {
  console.log("MongoDB Connected")
})


const userRouter = require('./routes/authRoute');
const categoryRouter = require('./routes/categoryRoute');
const courseRouter = require('./routes/courseRoute');
const quizRouter = require('./routes/quizRoute');
const lessonRouter = require('./routes/lessonsRoute');



// Routes
app.use('/api/auth', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/course', courseRouter);
app.use('/api/quiz', quizRouter);
app.use('/api/lesson', lessonRouter);


app.listen(process.env.PORT || 4000, () => {
    console.log('listening on port: 4000');
  });
  
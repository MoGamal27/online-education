const asyncHandler = require('express-async-handler');
const Lesson = require('../models/lessons');
const appError = require('../utils/appError');
const httpStatusText = require('../utils/httpStatusText');


const getAllLesson = asyncHandler(async (req, res, next) => {

    const lessons = await Lesson.find();

    res.status(200).json({status: httpStatusText.SUCCESS, data: {lessons: lessons}})

})

const getLesson = asyncHandler(async (req, res, next) => {

    const lesson = await Lesson.findById(req.params.id);

    if(!lesson){
        const error = appError.create('Lesson not found', 404, httpStatusText.ERROR);
        return next(error);
    }

    res.status(200).json({status: httpStatusText.SUCCESS, data: {lesson: lesson}})

})

const postLesson = asyncHandler(async (req, res, next) => {

    const lesson = await Lesson.create(req.body);

    res.status(200).json({status: httpStatusText.SUCCESS, data: {lesson: lesson}})

})

const editLesson = asyncHandler(async (req, res, next) => {

    const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {new: true});

    if(!lesson){    
        const error = appError.create('Lesson not found', 404, httpStatusText.ERROR);
        return next(error);
    }

    res.status(200).json({status: httpStatusText.SUCCESS, data: {lesson: lesson}})

})

const deleteLesson = asyncHandler(async (req, res, next) => {

    const lesson = await Lesson.findByIdAndDelete(req.params.id);

    if(!lesson){
        const error = appError.create('Lesson not found', 404, httpStatusText.ERROR);
        return next(error);
    }

    res.status(200).json({status: httpStatusText.SUCCESS, data: {lesson: lesson}})

})



module.exports = {getAllLesson, getLesson, postLesson, editLesson, deleteLesson}


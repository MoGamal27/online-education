const asyncHandler = require('express-async-handler');
const Course = require('../models/course');
const appError = require('../utils/appError');
const httpStatusText = require('../utils/httpStatusText');


const getAllCourse = asyncHandler(async (req, res, next) => {

    const courses = await Course.find();

    res.status(200).json({status: httpStatusText.SUCCESS, data: {courses: courses}})


})

const getCourse = asyncHandler(async (req, res, next) => {

    const course = await Course.findById(req.params.id);

    if(!course){
        const error = appError.create('Course not found', 404, httpStatusText.ERROR);
        return next(error);
    }

    res.status(200).json({status: httpStatusText.SUCCESS, data: {course: course}})


})

const postCourse = asyncHandler(async (req, res, next) => {

    const course = await Course.create(req.body);

    res.status(201).json({status: httpStatusText.SUCCESS, data: {course: course}})


})

const editCourse = asyncHandler(async (req, res, next) => {

    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true});

    if(!course){
        const error = appError.create('Course not found', 404, httpStatusText.ERROR);
        return next(error);
    }

    res.status(200).json({status: httpStatusText.SUCCESS, data: {course: course}})


})

const deleteCourse = asyncHandler(async (req, res, next) => {

    const course = await Course.findByIdAndDelete(req.params.id);

    if(!course){
        const error = appError.create('Course not found', 404, httpStatusText.ERROR);
        return next(error);
    }

    res.status(200).json({status: httpStatusText.SUCCESS, data: {course: course}})


})


module.exports = {getAllCourse, getCourse, postCourse, editCourse, deleteCourse}




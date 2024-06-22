import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetail } from '../../store/courseSlice';
import ProgressBar from '../common/ProgressBar';
import Quiz from './Quiz';
import Assignment from './Assignment';

const CourseDetail = ({ match }) => {
  const dispatch = useDispatch();
  const { course, progress } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourseDetail(match.params.courseId));
  }, [dispatch, match.params.courseId]);

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <ProgressBar progress={progress} />
      <ul>
        {course.content.map((lesson) => (
          <li key={lesson._id}>
            <h3>{lesson.title}</h3>
            {lesson.type === 'quiz' && <Quiz quiz={lesson.quiz} />}
            {lesson.type === 'assignment' && <Assignment assignment={lesson.assignment} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;

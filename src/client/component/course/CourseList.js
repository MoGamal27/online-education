import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProgress } from '../../store/courseSlice';


const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);

  useEffect(() => {
    dispatch(updateProgress());
  }, [dispatch]);

  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      {courses.map((course) => (
        <div key={course.id} className="course-item">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;

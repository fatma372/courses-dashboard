import React, { createContext, useState } from 'react';
import coursesData from '../data/coursesData';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(coursesData);

  // add new course 
  const addCourse = (course) =>
    setCourses([...courses, { ...course, id: courses.length + 1 }]);

  // update course by id
  const updateCourse = (updatedCourse) =>
    setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));

  // delete course by id
  const deleteCourse = (id) =>
    setCourses(courses.filter(c => c.id !== id));

  return (
    <CourseContext.Provider value={{ courses, addCourse, updateCourse, deleteCourse }}>
      {children}
    </CourseContext.Provider>
  );
};  
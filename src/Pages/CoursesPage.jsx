import React, { useContext, useState } from 'react';  
import { CourseContext } from "../contexts/courseContext";  
import { useNavigate } from 'react-router-dom';
export default function CoursesPage() {  
  const { courses, deleteCourse } = useContext(CourseContext);  
  const [searchTerm, setSearchTerm] = useState('');   
  let Navigate = useNavigate(); 
  //search for courses:
  const filteredCourses = courses.filter(course =>  
    course.name.toLowerCase().includes(searchTerm.toLowerCase())  
  );  

  return (  
    <div className="p-6 bg-gray-800 min-h-screen">  
      {/* head and add button */}  
      <div className="flex justify-between items-center mb-4 flex-wrap md:flex-nowrap">  
        <h1 className="text-2xl font-semibold text-white">All courses</h1>  
        <button  
          className="mt-2 md:mt-0 px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"  
          onClick={() => Navigate('/add')} //go to add course page  
        >  
          + Add New Course  
        </button>  
      </div>  

      {/* search field */}   
      <div className="mb-4">  
        <input  
          type="text"  
          placeholder="Search in our courses..."  
          className="w-full px-3 py-2 border border-gray-300 rounded text-white"  
          value={searchTerm}  
          onChange={(e) => setSearchTerm(e.target.value)}  
        />  
      </div>  

      {/* courses list: */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-7">  
        {filteredCourses.length > 0 ? 
        (  
          filteredCourses.map((course) => (  
            <div  
              key={course.id}  
              className=" course-card bg-white p-4 rounded shadow flex flex-col "  
            >  
              <img  
                src={course.thumbnail}  
                alt={course.name}  
                className="mb-4 w-full h-48 object-cover rounded"  
              />  
              <h2 className="text-xl font-semibold mb-2 text-gray-700">{course.name}</h2>  
              <p className="mb-2 text-gray-600">{course.description}</p>  
              <div>  
                <p className='font-semibold mb-2 text-gray-700'>
                  Start Date: <span  className="text-sm text-gray-500 mb-2">{course.startDate}</span>
                </p> 
                <p className='font-semibold mb-2 text-gray-700'>
                  End Date: <span  className="text-sm text-gray-500 mb-2">{course.endDate}</span>
                </p>
              </div>  
              <div className="font-semibold mb-4">Price: {course.price}$</div>  
              <div className="mt-auto flex space-x-2">  
                {/* edit */}  
                <button  
                  className="flex-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded"  
                  onClick={() => Navigate(`/edit/${course.id}`)} // go to edit page  
                >  
                  Edit  
                </button>  
                {/* delete btn*/}  
                <button  
                  className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded"  
                  onClick={() => deleteCourse(course.id)} // just delete course by id  
                >  
                  Delete  
                </button>  
                {/* view btn */}  
                <button  
                  className="flex-1 px-3 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded"  
                  onClick={() => Navigate(`/courses/${course.id}`)} // go to single course page  
                >  
                  view  
                </button>
              </div>  
            </div>  
          ))  
        ) : (  
          <p className="col-span-full text-center text-red-600">No courses founded!</p>  
        )}  
      </div>  
    </div>  
  );  
}  
import React from 'react'  
import { useParams, useNavigate } from 'react-router-dom'  
import { useContext } from 'react'  
import { CourseContext } from '../contexts/courseContext'  

export default function SingleCourse() {  
  const { id } = useParams()  
  const { courses } = useContext(CourseContext)  
  const course = courses.find(c => c.id.toString() === id)  
  const navigate = useNavigate()  

  if (!course) {  
    return (  
      <div className="flex items-center justify-center min-h-screen bg-gray-100">  
        <div className="text-center p-6 bg-white rounded shadow-lg">  
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Course Not Found</h2>  
          <button  
            className="mt-4 px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"  
            onClick={() => navigate('/courses')}  
          >  
            Back to all courses  
          </button>  
        </div>  
      </div>  
    )  
  }  

  return (  
    <div className="min-h-screen bg-gray-400 p-6 flex flex-col items-center">  
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 m-4">    
        <img  
          src={course.thumbnail}  
          alt={course.name}  
          className="w-full h-64 object-cover rounded-lg mb-6"  
        />  
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.name}</h1>  
       
        <p className="text-gray-600 mb-4">{course.description}</p>  

        <div className="flex items-center mb-4">
            <span className="text-lg font-semibold text-gray-600">Price: </span>  
            <span className="text-lg text-violet-600 font-bold">${course.price}</span>
        </div>

        <div className="flex space-x-4 mb-4">  
          <div className="flex flex-col">  
            <span className="text-sm text-gray-500">Start Date</span>  
            <span className="text-gray-700">{course.startDate}</span>  
          </div>  
          
          <div className="flex flex-col">  
            <span className="text-sm text-gray-500">End Date</span>  
            <span className="text-gray-700">{course.endDate}</span>  
          </div>  
        </div>  
        
        <button  
          className="w-full md:w-auto px-5 py-2 hover:bg-gray-400 text-white text-md rounded-lg hover:text-black bg-violet-500 transition duration-200"  
          onClick={() => navigate('/courses' , { replace: true })}  
        >  
          Back to all Courses  
        </button>  
      </div>  
    </div>  
  )  
}  
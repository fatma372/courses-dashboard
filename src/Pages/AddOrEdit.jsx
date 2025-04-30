import React, { useState, useEffect, useContext } from 'react';  
import { CourseContext } from '../contexts/courseContext';    
import { useParams, useNavigate } from 'react-router-dom';  

export default function AddOrEdit() {  
  const { id } = useParams();  
  const navigate = useNavigate();  

  const { courses, addCourse, updateCourse } = useContext(CourseContext);  
 
  const [courseData, setCourseData] = useState({  
    name: '',  
    description: '',  
    thumbnail: '',  
    startDate: '',  
    endDate: '',  
    price: '',  
  });  

  useEffect(() => {  
    if (id) {  
      const existingCourse = courses.find(c => c.id.toString() === id);  
      if (existingCourse) {  
        setCourseData(existingCourse);  
      }  
    }  
  }, [id, courses]);  

    //handle all input changes with name
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setCourseData(prev => ({ ...prev, [name]: value }));  
  };  
 
  //handle submit
  const handleSubmit = (e) => {  
    e.preventDefault();  

    if (id) {  
      updateCourse({ ...courseData, id: Number(id) });  
    } else {  
      addCourse(courseData);  
    }  

    navigate('/courses', { replace: true });  
  };  

  return (  
    <div className="p-6 bg-gray-800 min-h-screen flex items-center">
        <div className="max-w-screen mx-auto p-6 bg-white rounded  shadow-gray-600 shadow-lg">  
      <h2 className=" border-l-4 text-xl font-semibold mb-4 w-fit p-2">{id ? 'Edit Course' : 'Add New Course'}:</h2>  
      
      <form onSubmit={handleSubmit} className="space-y-4">  
        <div>  
          <label className="block mb-1 font-medium">Name:</label>  
          <input  
            type="text"  
            name="name"  
            value={courseData.name}  
            onChange={handleChange}  
            className="w-full px-3 py-2 border rounded"  
            required  
          />  
        </div>  

        <div>  
          <label className="block mb-1 font-medium">Description:</label>  
          <textarea  
            name="description"  
            value={courseData.description}  
            onChange={handleChange}  
            className="w-full px-3 py-2 border rounded"  
            rows={3}  
            required  
          />  
        </div>  

        <div >  
          <label className="block mb-1 font-medium">Thumbnail URL:</label>  
          <input  
            type="text"  
            name="thumbnail"  
            value={courseData.thumbnail}  
            onChange={handleChange}  
            className="w-full px-3 py-2 border rounded"  
          />  
        </div>  

       <div className='flex gap-4 justify-center'>
       <div className='w-full'>  
          <label className="block mb-1 font-medium ">Start Date:</label>  
          <input  
            type="text"
            placeholder='dd-mm-yyyy'
            pattern="\d{2}-\d{2}-\d{4}"  
            name="startDate"  
            value={courseData.startDate}  
            onChange={handleChange}  
            className="w-full px-3 py-2 border rounded"  
          />  
        </div>  

        <div className='w-full'>  
          <label className="block mb-1 font-medium">End Date:</label>  
          <input  
            type="text"
            placeholder='dd-mm-yyyy'
            pattern="\d{2}-\d{2}-\d{4}"  
            name="endDate"  
            value={courseData.endDate}  
            onChange={handleChange}  
            className="w-full px-3 py-2 border rounded"  
          />  
        </div>
        </div>  

        <div>  
          <label className="block mb-1 font-medium">Price:</label>  
          <input  
            type="text"  
            name="price"  
            value={courseData.price}  
            onChange={handleChange}  
            className="w-full px-3 py-2 border rounded"  
          />  
        </div>  

        <button  
          type="submit"  
          className="px-4 py-2 my-auto hover:bg-gray-800 text-white rounded bg-violet-900"  
        >  
          {id ? 'Update Course' : 'Add Course'}  
        </button>  
      </form>  
    </div> 
    </div> 
  );  
}  
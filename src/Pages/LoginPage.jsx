import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [errors, setErrors] = useState({ email: '', password: ''});  
  const navigate = useNavigate();
  const validateEmail = (email) => {  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return emailRegex.test(email);  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    let valid = true;  
    let errors = { email: '', password: ''};  

    if (!email) {  
      errors.email = 'Email is required';  
      valid = false;  
    } else if (!validateEmail(email)) {  
      errors.email = 'Enter a valid email';  
      valid = false;  
    }  

    if (!password) {  
      errors.password = 'Password is required';  
      valid = false;  
    }  

    setErrors(errors);  

    if (valid) {  
        localStorage.setItem(  
            'user',  
            JSON.stringify({ email, password })  
          );  
          //alert('logged in successfully!'); 
          navigate('/courses');
        }else{
            console.log(errors)
        }
  };  

  return (  
    <div className="flex items-center justify-center min-h-screen bg-gray-800">  
      <div className="w-full max-w-lg p-8 bg-white rounded shadow">  
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Login</h2>  
        <form onSubmit={handleSubmit} noValidate>  
          {/* email input */}  
          <div className="mb-4">  
            <label className="block mb-1 text-gray-600" htmlFor="email">Email:</label>  
            <input  
              type="email"  
              id="email" 
              placeholder='Enter a valid email' 
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800 ${  
                errors.email ? 'border-red-500' : 'border-gray-300'  
              }`}  
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
            />  
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}  
          </div>  

          {/* password input */}  
          <div className="mb-4">  
            <label className="block mb-1 text-gray-600" htmlFor="password">Password:</label>  
            <input  
              type="password"  
              id="password"  
                placeholder='Enter a valid password'
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800 ${  
                errors.password ? 'border-red-500' : 'border-gray-300'  
              }`}  
              value={password}  
              onChange={(e) => setPassword(e.target.value)}  
            />  
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}  
          </div>  

          {/* submit */}  
          <button  
            type="submit"  
            className="w-full px-4 py-2 font-semibold text-white bg-gray-800 rounded hover:bg-gray-900 focus:outline-none"  
          >  
            Login  
          </button>  
        </form>  
      </div>  
    </div>  
  );  
}  
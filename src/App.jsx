import './App.css'
import AddOrEdit from './Pages/AddOrEdit'
import CoursesPage from './Pages/CoursesPage'
import LoginPage from './Pages/LoginPage'
import SingleCourse from './Pages/SingleCourse'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'

const routes=createBrowserRouter([
  {
    path:'/',
    element:<LoginPage/>
  },
  {
    path:'/courses',
    element:<CoursesPage/>
  },
  {
    path:'/courses/:id',
    element:<SingleCourse/>
  },
  {
    path:'/add',
    element:<AddOrEdit/>
  },
  {
    path:'/edit/:id',
    element:<AddOrEdit/>
  }
])
function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App

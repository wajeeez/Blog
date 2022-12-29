import logo from './logo.svg';


import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Single from './Pages/Single';
import Write from './Pages/Write';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './style.scss'



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";


const Layout = () =>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/> ,
    children : [
        {
          path: "/",
          element: <Home/>,
        },

        {
          path: "/create",
          element: <Write/>,
        },

        {
          path: "/post/:id",
          element: <Single/>,
        }

    ]
  },
  
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/reg",
    element: <Register/>,
  },

]);


function App() {
  return (
    <div className='app'>
      <div className='container'>

      <RouterProvider router={router}/>
      </div>
       
    </div>
  );
}

export default App;


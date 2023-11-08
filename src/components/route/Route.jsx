import '../../index.css'
import {  createBrowserRouter} from "react-router-dom";
import Home from '../home/Home';
import Layout from '../layout/Layout';
import Errorpage from '../404errorpage/Errorpage';
import Login from '../login/Login';
import Singup from '../singup/Singup';
import Addblog from '../allpages/addblog/Addblog';
import Allblog from '../allpages/allblog/Allblog';
import Wishlist from '../allpages/wishlist/Wishlist';
import Detailsblog from '../allpages/detailsblog/Detailsblog';
import Privetroute from '../privetroute/Privetroute';
import Featuredblog from '../allpages/featuredblog/Featuredblog';
import Updateblog from '../allpages/updateblog/Updateblog';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout> ,
      errorElement: <Errorpage></Errorpage> ,
      children : [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/singup',
          element: <Singup></Singup>
        },
        {
          path:'/addblog',
          element: <Privetroute>  <Addblog></Addblog> </Privetroute>
        },
        {
          path:'/allblog',
          element:<Allblog></Allblog>,
          loader: ()=> fetch('http://localhost:5000/blog')
        },
        {
          path:'/wishlist',
          element:   <Privetroute> <Wishlist></Wishlist> </Privetroute>
          // loader : ()=> fetch('http://localhost:5000/users')
        },
        {
          path: '/details/:_id',
          element: <Detailsblog></Detailsblog>,
          loader: ({ params }) => fetch(`http://localhost:5000/users/${params._id}`) 
        },
        {
          path:'/blogupdate/:_id',
          element: <Privetroute> <Updateblog></Updateblog> </Privetroute> ,
          loader: ({params}) => fetch(`http://localhost:5000/blog/${params._id}`)
        }  ,
        {
          path:'/fetured',
          element: <Featuredblog></Featuredblog>,
          loader: ()=> fetch('http://localhost:5000/blog')
        }      
      ]
    },
   
  ]);
  

export default router;
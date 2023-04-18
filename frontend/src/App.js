import { useRoutes } from 'react-router-dom';
import Layout from './Layout'
import Home from './pages/Home'
import Tournaments from './pages/Tournaments'
import Learn from './pages/Learn'
import SportsNews from './pages/SportsNews'
import AboutUs from './pages/AboutUs'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile.js'
import OrganiseTournament from './pages/OrganiseTournament'
import {useAuthContext} from './hooks/useAuthContext'
import { Navigate } from 'react-router-dom'
import './App.css';




function App() {

  const {user}=useAuthContext();
  const Routes = [
    {
        path:'/shubh',
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'tournaments',
                element:<Tournaments/>
            },
            {
                path:'organise-tournament',
                element:!user?<Login/>:<OrganiseTournament/>
            },
            {
                path:'learn',
                element:<Learn/>
            },
            {
                path:'sports-news',
                element:<SportsNews/>
            },
            {
                path:'about-us',
                element:<AboutUs/>
            },
            {
                path:'signup',
                element:!user?<Signup/>:<Navigate to='/'/>
            },
            {
                path:'login',
                element: !user?<Login/>:<Navigate to='/'/>
            },
            {
                path:'profile',
                element:<Profile/>
            },
        ]
    },
    
]

  let element=useRoutes(Routes);
  return (
   <>
    {element}
   </>
  );
}

export default App;

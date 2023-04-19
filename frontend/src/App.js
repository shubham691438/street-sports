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
import TournamentDetailPage from './pages/TournamenetDetailPage';




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
                path:'/shubh/tournaments',
                element:<Tournaments/>,
            },
            {
                path:'/shubh/tournaments/:tournament_id',
                element:<TournamentDetailPage/>
            },
            {
                path:'/shubh/organise-tournament',
                element:!user?<Login/>:<OrganiseTournament/>
            },
            {
                path:'/shubh/learn',
                element:<Learn/>
            },
            {
                path:'/shubh/sports-news',
                element:<SportsNews/>
            },
            {
                path:'/shubh/about-us',
                element:<AboutUs/>
            },
            {
                path:'/shubh/signup',
                element:!user?<Signup/>:<Navigate to='/shubh'/>
            },
            {
                path:'/shubh/login',
                element: !user?<Login/>:<Navigate to='/shubh'/>
            },
            {
                path:'/shubh/profile',
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

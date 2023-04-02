import React from 'react'
import Layout from './Layout'
import Home from './pages/Home'
import Tournaments from './pages/Tournaments'
import Learn from './pages/Learn'
import SportsNews from './pages/SportsNews'
import AboutUs from './pages/AboutUs'

const Routes = [
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/tournaments',
                element:<Tournaments/>
            },
            {
                path:'/learn',
                element:<Learn/>
            },
            {
                path:'/sports-news',
                element:<SportsNews/>
            },
            {
                path:'/about-us',
                element:<AboutUs/>
            }
        ]
    }
]

export default Routes
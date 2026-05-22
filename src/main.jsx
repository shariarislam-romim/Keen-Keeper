import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './MainLayout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import Timeline from './pages/Timeline.jsx'
import Error from './pages/Error.jsx'
import Stats from './pages/Stats.jsx'
import FriendDetails from './pages/detailsPage/FriendDetails.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    Component : Layout,
    children:[
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/timeline",
        element: <Timeline/>,
      },
      {
        path : "/stats",
        element: <Stats/>,
      },
      {
        path: "/friendDetails/:selectId",
        Component: FriendDetails,
        loader: ()=> fetch('/Friends.json')
      }
    ],
    errorElement: <Error/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


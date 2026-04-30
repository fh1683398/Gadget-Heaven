import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <h3 className='font-bold text-5xl'>404 not found, go back</h3>,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)

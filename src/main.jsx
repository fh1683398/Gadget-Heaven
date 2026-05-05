import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Pages/Home.jsx'
import Statics from "./components/Pages/Statics.jsx"
import Dashboard from "./components/Pages/Dashboard.jsx"
import Gadgets from "./components/Gadgets/Gadgets.jsx"
import GadgetDetails from './components/Gadgets/GadgetDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <h3 className='font-bold text-5xl'>404 not found, go back</h3>,
    children: [
      {
        path: "/",
        loader: () => fetch('/category.json'),
        Component: Home,
        children: [
          {
            index: "true",
            loader: () => fetch("/gadgets.json"),
            Component: Gadgets
          },
          {
            path: "/category/:category",
            loader: () => fetch("/gadgets.json"),
            Component: Gadgets
          },
        ]
      },
      {
        path: "/products/:product_id",
        loader: () => fetch('/gadgets.json'),
        Component: GadgetDetails
      },
      {
        path: "statics",
        Component: Statics
      },
      {
        path: "dashboard",
        Component: Dashboard
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

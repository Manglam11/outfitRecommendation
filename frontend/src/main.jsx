import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
import WeatherCard from './components/WeatherCard/WeatherCard'
import SignUp from './components/Auth/SignUp'
import Login from './components/Auth/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='card' element={<WeatherCard />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

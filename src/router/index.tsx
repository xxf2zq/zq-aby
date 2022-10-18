import { Navigate } from 'react-router-dom'
import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))
const All = lazy(() => import('../pages/all'))
const Detail = lazy(() => import('../pages/detail'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: '/home',
    element: <Home></Home>,
  },
  {
    path: '/all',
    element: <All></All>,
  },
  {
    path: '/detail',
    element: <Detail></Detail>,
  },
]

export default routes

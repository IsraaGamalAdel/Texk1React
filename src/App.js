import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About';
import PortFolio  from './Components/PortFolio/PortFolio';
import Contact from './Components/Contact/Contact';
import STARTFRAMEWORK from './Components/STARTFRAMEWORK/STARTFRAMEWORK'
import Notfound from './Components/Notfound/Notfound';




export default function App(){
  let routers = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true, element:<STARTFRAMEWORK/>},
      {path:'About' , element:<About/>},
      {path:'PortFolio' , element:<PortFolio/>},
      {path:'Contact' , element:<Contact/>},
      {path:'*' , element:<Notfound/>}
    ]}
  ])
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}


import React from 'react';
import Nev from '../Nev/Nev';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


export default function Layout(){
    return <>
        <Nev/>
        <Outlet></Outlet>
        <Footer/>
    </>
}

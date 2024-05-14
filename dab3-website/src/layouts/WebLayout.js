
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import company from '../assets/videos/comp2.mov'
import logo from '../assets/images/logo-10.png'
import { useRef } from 'react';
import '../assets/css/navbar.css'
export default function RootLayout() {  
    return (
        <div>
            <Outlet/>
        </div>
    )
}
import React from 'react'
import NavBar from './NavBar'


const Layout = ({children}) => {
  return (    
    <div className="flex flex-col">
        {/* Sidebar + Navbar */}
        <NavBar />
        {/* Main Content */}
        <div className="flex-1 p-4">{children}</div>
    </div>
  )
}

export default Layout
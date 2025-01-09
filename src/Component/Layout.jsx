import React, { useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import MainSection from './MainSection';
const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>

      <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <MainSection />
    </>
  );
};

export default Layout;
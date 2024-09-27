import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  pageSubTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle, pageSubTitle }) => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col bg-gray-900 w-full">
        {/* Page header */}
        <Header title={pageTitle} subtitle={pageSubTitle}/>

        {/* Main content */}
        <div className="p-4 flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

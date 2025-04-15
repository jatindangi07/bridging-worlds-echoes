
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollArea className="flex-grow pt-16 md:pt-20">
        <main>
          {children}
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Layout;

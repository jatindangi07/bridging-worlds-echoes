
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-mahmudabad-cream px-4">
        <h1 className="text-mahmudabad-blue font-playfair text-7xl md:text-9xl font-bold mb-4">404</h1>
        <p className="text-xl md:text-2xl text-mahmudabad-navy mb-8 text-center max-w-md">
          The page you're looking for cannot be found.
        </p>
        <Button asChild size="lg" className="bg-mahmudabad-blue hover:bg-mahmudabad-blue/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;

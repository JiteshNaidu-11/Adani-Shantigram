import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-4 py-16">
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-4xl font-bold font-display">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          className="text-accent font-medium underline hover:text-accent/90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

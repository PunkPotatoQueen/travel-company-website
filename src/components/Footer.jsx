import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-50 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M9 8H6v4h3v12h5V12h3.641l.36-4H14V5.419C14 4.589 14.841 4 15.855 4H18V0h-3.014C12.796 0 9 2.69 9 7.897V8z" />
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.931 4.931 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.184 4.916 4.916 0 0 0-8.384 4.482 13.939 13.939 0 0 1-10.124-5.138 4.822 4.822 0 0 0-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.902 4.902 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.92 4.89a4.935 4.935 0 0 1-2.224.084 4.923 4.923 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 21c9.057 0 14.002-7.496 14.002-13.986 0-.213-.004-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
            >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.323 3.608 1.299.976.976 1.237 2.243 1.299 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.323 2.633-1.299 3.608-.976.976-2.243 1.237-3.608 1.299-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.323-3.608-1.299-.976-.976-1.237-2.243-1.299-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.323-2.633 1.299-3.608C3.509 2.486 4.776 2.225 6.142 2.163 7.408 2.105 7.788 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07c-1.362.058-2.568.31-3.607 1.349C2.306 2.417 2.054 3.623 1.996 4.985.938 5.255 0 6.551 0 8.887V15.114c0 2.337.938 3.633 1.996 4.902.058 1.362.31 2.568 1.349 3.607 1.039 1.039 2.245 1.291 3.607 1.349 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.362-.058 2.568-.31 3.607-1.349 1.039-1.039 1.291-2.245 1.349-3.607.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.362-.31-2.568-1.349-3.607-1.039-1.039-2.245-1.291-3.607-1.349-1.28-.058-1.689-.07-4.948-.07zm0 5.838a6.162 6.162 0 1 0 6.162 6.162A6.154 6.154 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 3.999-3.999A4 4 0 0 1 12 16zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
            </a>

        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Viaje.com @ Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

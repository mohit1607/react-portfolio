import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full bg-gray-900 rounded-3xl p-12 shadow-xl text-center bg-primary">
        <h1 className="text-[8rem] font-extrabold tracking-tight select-none text-accent">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="mb-8 text-gray-300">
          Sorry, the page you are looking for doesn’t exist or has been removed
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 transition bg-accent text-white font-semibold px-8 py-3 rounded-full shadow-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;

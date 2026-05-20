// import React from "react";
import { Link } from "react-router";


const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-red-500">404</h1>

                <h2 className="text-3xl font-semibold mt-4 text-gray-800">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-500 mt-2 mb-6">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl mb-4 font-bold text-red-600">Oops!</h1>
        <p className="text-lg mb-6">Something went wrong.</p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

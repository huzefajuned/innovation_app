import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { getCurrentUser } from "../services/api";
import Profile from "./Profile";
import { toast } from "react-toastify";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [cartValue, setCartValue] = useState(0); // Initialize cart value to 0

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (authToken) {
      getCurrentUser(authToken)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((error) => {
          console.error("Error fetching current user:", error);
          toast.error("Error fetching current user");
        });
    } else {
      toast.error("No token found in local storage. please login first  😱");
      setCurrentUser(null);
    }
  }, [authToken]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  //   useEffect(() => {
  //     if (currentUser !== null && authToken) {
  //       console.log("currentUser inside header", currentUser);
  //     }
  //   }, [currentUser]);

  return (
    <div className="flex justify-between items-center p-2  bg-white shadow-xl sticky top-0 right-0 ">
      {/* Logo */}
      <div className="flex items-center p-2 w-full">
        <img src={logo} alt="Logo" className="h-14 mr-2" />
      </div>

      {/* Search bar */}
      <div className="w-8/12 p-2 flex flex-row justify-center items-center">
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 bg-gray-700 rounded-md text-white focus:outline-none focus:bg-gray-600"
          />
        </div>

        {/* User icon */}
        <div className="flex justify-between  relative  gap-8 ">
          {currentUser && (
            <>
              <div className="cart mx-2 ">
                <span className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs absolute ">
                  {cartValue}
                </span>
                <img
                  src="https://cdn-icons-png.freepik.com/512/7835/7835563.png"
                  alt="cart"
                  className="h-16 w-16 rounded-full cursor-pointer bg-transparent "
                />
              </div>
              <img
                src={currentUser.image}
                alt="User"
                className="h-16 w-16 rounded-full cursor-pointer border-2 shadow-xl"
                onClick={toggleDetails}
              />
            </>
          )}
          {showDetails && (
            <Profile user={currentUser} toggleDetails={toggleDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

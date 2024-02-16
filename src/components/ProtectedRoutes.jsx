// Higher-order component for protected routes
const ProtectedRoutes = ({ element: Element, ...rest }) => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    // Redirect to login if not authenticated
    window.location.href = "/";
    return null;
  }

  return <Element {...rest} />;
};

export default ProtectedRoutes;

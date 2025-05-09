import { Navigate } from "@tanstack/react-router";

const ProtectedRoute = ({children}:{children: React.ReactNode}) => {
  const isAuthenticated = false;

	if(!isAuthenticated){
		return <Navigate to="/login" />;
	};

  return children;
}

export default ProtectedRoute

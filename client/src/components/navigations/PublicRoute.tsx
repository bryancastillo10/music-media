import { Navigate } from "@tanstack/react-router";

const PublicRoute = ({children}:{ children: React.ReactNode}) => {
  const isAuthenticated = false;

  if(isAuthenticated) {
		return <Navigate to="/home" />
  }	
  return children;
}

export default PublicRoute

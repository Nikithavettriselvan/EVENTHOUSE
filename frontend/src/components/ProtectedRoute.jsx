import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// roles is optional: <ProtectedRoute roles={["organizer"]}>
function ProtectedRoute({ children, roles }) {
  const { user, loading } = useAuth();

  // Still checking the token with the backend
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-500">
        Loading...
      </div>
    );
  }

  // Not logged in
  if (!user) return <Navigate to="/login" replace />;

  // Logged in, but the wrong role
  if (roles && !roles.includes(user.role)) {
    return <Navigate to={user.role === "organizer" ? "/organizer" : "/events"} replace />;
  }

  return children;
}

export default ProtectedRoute;
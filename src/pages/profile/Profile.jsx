import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { authActions } from "../../context/auth/auth.reducer";
import { AuthContext } from "../../context/auth/AuthProvider";
const Profile = () => {
  const { auth, authDispatch } = useContext(AuthContext);
  if (!auth.isLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      Profile
      <Button
        onClick={() => {
          authDispatch({ type: authActions.logout });
        }}
      >
        logout
      </Button>
    </div>
  );
};

export default Profile;

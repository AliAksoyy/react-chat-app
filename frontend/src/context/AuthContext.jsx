import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    async function getProfile() {
      try {
        const res = await fetch(`http://localhost:8000/api/auth/profile`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + authUser,
          },
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setUserProfile(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getProfile();
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, userProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

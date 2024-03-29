import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  async function logout() {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("token");
      setAuthUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return { loading, logout };
};

export default useLogout;

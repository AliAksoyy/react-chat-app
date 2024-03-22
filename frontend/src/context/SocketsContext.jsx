import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
const SocketsContext = createContext();

export const useSocketsContext = () => {
  return useContext(SocketsContext);
};

// eslint-disable-next-line react/prop-types
const SocketsContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(8);
  const { userProfile } = useAuthContext();

  useEffect(() => {
    if (userProfile) {
      const socket = io("http://localhost:8000", {
        query: { userId: userProfile._id },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        console.log(users)
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [userProfile]);

  console.log(socket);

  return (
    <SocketsContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketsContext.Provider>
  );
};

export default SocketsContextProvider;

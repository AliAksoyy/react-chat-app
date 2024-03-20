import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  const { authUser } = useAuthContext();

  useEffect(() => {
    async function getMessages() {
      setLoading(false);
      try {
        const res = await fetch(
          `http://localhost:8000/api/messages/${selectedConversation._id}`,
          { method: "GET", headers: { Authorization: "Bearer " + authUser } }
        );
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        } else {
          setMessages(data);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (selectedConversation._id) getMessages();
  }, [authUser, selectedConversation._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;

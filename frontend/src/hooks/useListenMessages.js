import { useSocketsContext } from "../context/SocketsContext";
import useConversation from "../zustand/useConversation";
import { useEffect } from "react";

export const useListenMessages = () => {
  const { socket } = useSocketsContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

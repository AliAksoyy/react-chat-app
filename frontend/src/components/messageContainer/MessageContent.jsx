import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import { useEffect, useRef } from "react";

const MessageContent = () => {
  const { loading, messages } = useGetMessages();
  const lastMessage = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessage?.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length !== 0 &&
        messages.map((message, index) => (
          <div ref={lastMessage} key={index}>
            <Message message={message} />
          </div>
        ))}
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-slate-300 text-center">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default MessageContent;

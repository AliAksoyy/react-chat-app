import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";

const MessageContent = () => {
  const { loading, messages } = useGetMessages();

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length !== 0 &&
        messages.map((message, index) => (
          <Message key={index} message={message} />
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

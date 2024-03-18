import MessageContent from "./MessageContent";
import MessageHeader from "./MessageHeader";
import MessageSend from "./MessageSend";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        <MessageHeader />
        <MessageContent />
        <MessageSend />
      </>
    </div>
  );
};

export default MessageContainer;

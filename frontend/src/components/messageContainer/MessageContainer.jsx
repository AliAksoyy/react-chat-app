import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageContent from "./MessageContent";
import MessageHeader from "./MessageHeader";
import MessageSend from "./MessageSend";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <MessageHeader fullName={selectedConversation.fullName} />
            <MessageContent />
            <MessageSend />
          </>
        )}
      </>
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Wellcome Ali Aksoy</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  const authUser = useAuthContext();
  const { selectedConversation } = useConversation();
  // eslint-disable-next-line react/prop-types
  const formMe = message.senderId === authUser._id;
  const chatClassName = formMe ? "chat-end" : "chat-start";
  const profilePic = formMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubleBgColor = formMe ? "bg-blue-500" : "";
  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble text-white ${bubleBgColor}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-100 pt-1">
          12:42
        </div>
      </div>
    </>
  );
};

export default Message;

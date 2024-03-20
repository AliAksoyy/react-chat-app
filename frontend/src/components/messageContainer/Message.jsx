/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  const { userProfile } = useAuthContext();
  const { selectedConversation } = useConversation();

  // eslint-disable-next-line react/prop-types
  const formMe = message.senderId == userProfile._id;
  console.log(formMe);
  const chatClassName = formMe ? "chat-end" : "chat-start";
  const profilePic = formMe
    ? userProfile.profilePic
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
        <div className={`chat-bubble text-white max-w-60 overflow-clip ${bubleBgColor}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-100 pt-1">
          {extractTime(message.createdAt)}
        </div>
      </div>
    </>
  );
};

export default Message;

import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
  console.log(conversations);

  return (
    <div className="flex flex-col py-2">
      <Conversation />
    
    </div>
  );
};

export default Conversations;

import { BsSend } from "react-icons/bs";
const MessageSend = () => {
  return (
    <form className="px-4 my-3 ">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white outline-none"
          placeholder="Send a Message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 pe-6 text-white border-gray-600"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageSend;
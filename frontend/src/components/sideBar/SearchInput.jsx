import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [searchName, setSearchName] = useState("");

  const { conversations } = useGetConversations();
  const { setSelectedConversation } = useConversation();

  const handlerFilter = (e) => {
    e.preventDefault();
    if (!searchName) return;
    if (searchName.length < 3) {
      return toast.error("Search term must be at least 3 characters");
    }
    const conversation = conversations?.filter((conversation) => {
      return conversation.fullName
        .toLowerCase()
        .includes(searchName.toLowerCase());
    });
    console.log(conversation);
    if (conversation?.length > 0) {
      setSelectedConversation(conversation[0]);
      setSearchName("");
    } else {
      return toast.error("No such user found");
    }
  };

  return (
    <form onSubmit={handlerFilter} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-gray-900 text-gray-300"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 hover:bg-gray-900 text-white"
      >
        <IoIosSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

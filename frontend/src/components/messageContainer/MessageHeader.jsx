// eslint-disable-next-line react/prop-types
const MessageHeader = ({ fullName }) => {
  return (
    <div className=" px-4 py-2 bg-slate-500 mb-2 ">
      <span className="label-text">To:</span>{" "}
      <span className="text-gray-900 font-bold">{fullName}</span>
    </div>
  );
};

export default MessageHeader;

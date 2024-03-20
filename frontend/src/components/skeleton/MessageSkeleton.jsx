
const MessageSkeleton = () => {
  return (
    <div className="my-4">
      <div className="flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0  bg-slate-500"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-60  bg-slate-500"></div>
          <div className="skeleton h-4 w-60  bg-slate-500"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end mt-2 ">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-52  bg-slate-500"></div>
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0  bg-slate-500"></div>
      </div>
    </div>
  );
};

export default MessageSkeleton;

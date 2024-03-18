const GenderCheckbox = () => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="text-gray-300">Male</span>
          <input type="checkbox" className="checkbox border-gray-300" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="text-gray-300 ">Female</span>
          <input type="checkbox" className="checkbox border-gray-300" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

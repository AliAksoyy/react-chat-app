
// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ handleChange, selectedGender }) => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="text-gray-300">Male</span>
          <input
            type="checkbox"
            className="checkbox border-gray-300"
            onChange={() => {
              handleChange("male");
            }}
            checked={selectedGender === "male"}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="text-gray-300 ">Female</span>
          <input
            type="checkbox"
            className="checkbox border-gray-300"
            onChange={() => {
              handleChange("female");
            }}
            checked={selectedGender === "female"}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

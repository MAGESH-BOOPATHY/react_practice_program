export default Interests = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,

      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="cricket"
            checked={interests.includes("cricket")}
            onChange={handleDataChange}
          />
          Cricket
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="JavaScript"
            checked={interests.includes("JavaScript")}
            onChange={handleDataChange}
          />
          JavaScript
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

const InputField = ({ name, type = "text", value, onChange, placeholder, error }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${error ? "border-red" : "border-gray"}`}
    />
  );
};

export default InputField;
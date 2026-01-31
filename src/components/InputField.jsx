const InputField = ({ name, type = "text", value, onChange, placeholder, error }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`input-field ${error ? "border-red" : ""}`}
  />
);
export default InputField;
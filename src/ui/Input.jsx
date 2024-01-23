function Input({ placeholder = "", type = "text" }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="bg-greyV1 text-greyV2 rounded-full px-3 py-[7px] focus:outline-none focus:transition-transform"
    />
  );
}

export default Input;

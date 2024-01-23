function Button({ icon, children, type, color }) {
  return (
    <button className="flex flex-col items-center gap-1 text-sm">
      <span className={`${color} text-2xl`}>{icon}</span>
      {children}
    </button>
  );
}

export default Button;

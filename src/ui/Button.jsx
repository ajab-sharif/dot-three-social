function Button({ icon, children, type, color }) {
  if (type == "small")
    return (
      <button className="flex items-center gap-1 p-1 capitalize hover:bg-zinc-500">
        <span className="text-md">{icon}</span>
        {children}
      </button>
    );
  return (
    <button className="flex items-center gap-1 p-2 capitalize hover:bg-zinc-700">
      <span className={`text-2xl ${color}`}>{icon}</span>
      {children}
    </button>
  );
}

export default Button;

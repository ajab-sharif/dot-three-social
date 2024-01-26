function Button({ icon, children, type, color, horizontal }) {
  return (
    <button
      className={`flex ${
        horizontal === true
          ? "flex-col"
          : " rounded-full bg-stone-200 px-4 py-1 text-center font-semibold"
      } items-center gap-1 text-sm `}
    >
      <span className={`${color} text-2xl`}>{icon}</span>
      {children}
    </button>
  );
}

export default Button;

function Aside({ children, to }) {
  return (
    <aside className="bg-stone-700 hover:h-[100vh] hover:overflow-y-scroll">
      {children}
    </aside>
  );
}

export default Aside;

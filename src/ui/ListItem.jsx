import { Link, NavLink } from "react-router-dom";

function ListItem({ children, to, icon, nav = false }) {
  if (!nav)
    return (
      <li className="mb-1 w-[15rem]">
        <a className="hover:bg-greyV1 flex w-full items-center gap-2 rounded-md p-2 text-left capitalize text-stone-300">
          <span className="text-2xl text-primary">{icon}</span>
          <span>{children}</span>
        </a>
      </li>
    );
  return (
    <li className={`${nav ? "relative" : ""} cursor-pointer`}>
      <NavLink
        className="hover:bg-greyV1 flex items-center gap-2 rounded-md px-7 py-3 capitalize text-stone-300"
        to={to}
      >
        <span className="text-xl">{icon}</span>
        {children}
      </NavLink>
    </li>
  );
}

export default ListItem;

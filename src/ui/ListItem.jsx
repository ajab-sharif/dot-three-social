import { NavLink } from "react-router-dom";

function ListItem({ children, to, notific }) {
  return (
    <li>
      <NavLink className={`relative inline-block p-2`} to={to}>
        {notific && (
          <span className="absolute bottom-[10px] right-[4px] z-20 h-3 w-3 rounded-full bg-red-500 text-center text-[9px] font-semibold ">
            {notific}
          </span>
        )}
        {children}
      </NavLink>
    </li>
  );
}

export default ListItem;

import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Pagenavigation() {
  const selector = useSelector((state) => state.pathNavigate);
 
  return (
    <>

      <nav className="bg-gray-200 p-4">
        <ul className="list-none p-0  text-blue-500 font-bold text-1xl">
          
          <li className="inline">
            {selector.map((page, index) => (
              <NavLink
              key={index}
                
                to={page}
              >
                {page=='/home'? "/HOME":page}
              </NavLink>
            ))}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagenavigation;

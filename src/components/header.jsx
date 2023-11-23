import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navLinks = [
    { text: "Home", url: "/home" },
    { text: "Events", url: "/events" },
    { text: "Blogs", url: "/blogs" },
    { text: "Team", url: "/team" },
    { text: "Contact Us", url: "/contact" },
  ];

  return (
    <div className="flex space-x-4">
      <h3>hell0.world</h3>
      <ul className="flex gap-2">
        {navLinks.map((link, index) => (
          <li key={link.text}>
            <Link to={link.url}>{link.text}</Link>
            {index < navLinks.length - 1 && " |"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;

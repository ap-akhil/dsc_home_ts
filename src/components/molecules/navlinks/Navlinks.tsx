import React from "react";
import Link from "../../atoms/link/link";

interface NavProps {
  navlinks: string[];
}

export default function Navlinks({ navlinks }: NavProps) {
  return (
    <div className="main-nav-links">
      {navlinks.map((item, index) => {
        return (
          <Link
            key={index}
            className="link-nav"
            href="#"
            content={item}
            type="nav"
          />
        );
      })}
    </div>
  );
}

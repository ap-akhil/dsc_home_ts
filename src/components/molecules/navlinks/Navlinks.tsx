import React from "react";
import Link from "../../atoms/link/link";

type ArrayofType<Type> = {
  navlinks: Type[];
};

export default function Navlinks({
  navlinks,
}: ArrayofType<string>): JSX.Element {
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

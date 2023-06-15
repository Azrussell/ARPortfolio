// import React from "react";
// import "./Header.css";
// import { useRef, useState } from 'react';

// const Header = () => {
//   const ref = useRef(null);
//   return (
//     <header className="header-bar">
//       <nav className="nav-bar">
//         <ul className="nav-list">
//           <li className="nav-item"><button>Home</button></li>
//           <li className="nav-item"><button>About</button></li>
//           <li className="nav-item"><button>Contact</button></li>
//           <li className="nav-item"><button>Projects</button></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useRef } from "react";
import "./Header.css";

const Header = () => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <header className="header-bar">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <button onClick={() => scrollToRef()}>About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToRef(contactRef)}>Contact</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToRef(projectsRef)}>Projects</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


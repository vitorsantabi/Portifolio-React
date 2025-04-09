import React from 'react';
import X from "../../../public/twitter.png";
import Y from "../../../public/github-brands-solid.svg";
import Z from "../../../public/linkedin-logo.png";
import W from "../../../public/instagram.png";
import "./styleRedes.css";

export default function Redes() {
  return (
    <div className="content-redes">
      <h1 className="title">Redes Sociais</h1>
      <p>Me siga nas redes sociais:</p>
      <ul className="icons-redes">
        <li className='iconRedes'>
        
          <a href="https://github.com/vitorsantabi" target="_blank" rel="noopener noreferrer" className="redes">
            <img src={Y} alt="GitHub logo" />
            GitHub</a>
        </li>
        <li className='iconRedes'>
          
          <a href="https://www.linkedin.com/in/vitorsantab/" target="_blank" rel="noopener noreferrer" className="redes">
          <img src={Z} alt="LinkedIn logo" />
          LinkedIn</a>
        </li>
        <li className='iconRedes'>
          
          <a href="https://www.instagram.com/vitorsantab/" target="_blank" rel="noopener noreferrer" className="redes">
          <img src={W} alt="Instagram logo" />
          Instagram</a>
        </li>
        <li className='iconRedes'>
          <a href="https://x.com/vitorsantab" target="_blank" rel="noopener noreferrer" className="redes">
          <img src={X} alt="X logo" />
          X</a>
        </li>
      </ul>
    </div>
  );
}

  
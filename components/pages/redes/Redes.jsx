import React from 'react';
import X from "../../../public/twitter.png"
import Y from "../../../public/github-brands-solid.svg"
import Z from "../../../public/linkedin-logo.png"
import W from "../../../public/instagram.png"
import "./style.css"; 
export default function Redes() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Redes</h1>
        <p>Me siga nas redes sociais:</p>
        <ul className="icons-redes">
          <li><img src={Y} alt="" /><a href="https://github.com/vitorsantabi" target="_blank" className="text-blue-500 hover:underline">GitHub</a></li>
          <li><img src={Z} alt="" /><a href="https://www.linkedin.com/in/vitorsantab/" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a></li>
          <li><img src={W} alt="" /><a href="https://www.instagram.com/vitorsantab/" target="_blank" className="text-blue-500 hover:underline">Instagram</a></li>
          <li><img src={X} alt="" /><a href="https://x.com/vitorsantab" target="_blank" className="text-blue-500 hover:underline">X</a></li>
        </ul>
      </div>
    );
  }
  
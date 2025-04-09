import React from 'react';
import "./style.css";
import icon from "../../../public/avatar.jpg";
export default function SobreMim() {
    return (
      <div className="content">
        <div className='icon'>
      <img src={icon} alt="" />
        </div>
        <div className='SobreMim'>
          <h1>Sobre Mim</h1>
          <p>Meu nome é Vitor e sou estudante de programação. Estou sempre buscando aprender mais e me aprimorar na área. Atualmente, estou focado em desenvolver minhas habilidades em React e JavaScript.</p>
          <p>Estou animado para compartilhar meu conhecimento e experiências com vocês!</p>
      <button className='btn'>Download CV</button>
        </div>

      </div>
    );
  }
  
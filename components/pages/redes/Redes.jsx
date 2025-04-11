import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './style.css';

export default function Redes() {
  return (
    <div className='redes'>
      <div className='container-text'>
        <h1>Redes Socias</h1>
        <p>Me siga para acompanhar meu trabalho </p>
      </div>
      <div className='container-rede'>
        <a href='https://github.com/vitorsantabi' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='5x' />
          <span className='text-rede'>
            <strong>Github</strong>
            <p>github.com/vitorsantabi</p>
          </span>
        </a>
        <a href='https://www.linkedin.com/in/vitorsantabi' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='5x' />
          <span className='text-rede'>
            <strong>Linkedin</strong>
            <p>linkedin.com/in/vitorsantabi</p> 
          </span> 
        </a>
        <a href='https://www.instagram.com/vitorsantab/#' target='_blank' rel='noopener noreferrer'>  
          <FontAwesomeIcon icon={faInstagram} size='5x' />
          <span className='text-rede'>
            <strong>Instagram</strong>
            <p>instagram.com/vitorsantab</p>
          </span>
        </a>
        <a href='https://x.com/vitorsantab'>
          <FontAwesomeIcon icon={faXTwitter} size='5x' />
          <span className='text-rede'>
            <strong>Twitter</strong>
            <p>x.com/vitorsantab</p>
          </span>   
        </a>
      </div>
    </div>
  );
}

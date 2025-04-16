import './style.css';
import ProjetoCard from './arquivos/ProjetoCard.jsx';
export default function Projetos() {
    return (
      <div className="container">
        <h1 className="titulo">Projetos</h1>
        <p>Aqui estão alguns dos projetos que desenvolvi recentemente.</p>
       
        <ProjetoCard
                titulo="App Wiki Marina Diamandis"
                descricao="Desenvolvido em React Native, um app para Android que fala sobre a vida e os álbuns da cantora Marina Diamandis."
                imgSrc="/gifpro1.gif"
                githubLink="https://github.com/vitorsantabi/AppReact-native"
            />

        </div>
      )
  }
  
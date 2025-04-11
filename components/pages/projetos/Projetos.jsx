import './style.css';
export default function Projetos() {
    return (
      <div className="container">
        <h1 className="titulo">Projetos</h1>
        <p>Aqui estão alguns dos projetos que desenvolvi recentemente.</p>
        <div className="projetos-container">
          <div className="projeto-card">
            <h2>App Wiki Marina Diamandis</h2>
            <p>Desenvolvido em react-native, um app para Android, que fala sobre a vida e os album da Cantora Marina Diamandis</p>
            <div className='gif'>
             <img src="../public/gifpro1.gif" alt="" srcset="" />
            </div>
            <div>
              <div className='botao'>
                <a href="https://github.com/vitorsantabi/AppReact-native">Acesse o Gifhub do Projeto</a>
              </div>
            </div>
          </div>
          <div className="projeto-card">
            <h2>Projeto 2</h2>
            <p>Descrição do projeto 2.</p>
          </div>
          <div className="projeto-card">
            <h2>Projeto 3</h2>
            <p>Descrição do projeto 3.</p>
            </div>
          </div>
        </div>
      )
  }
  
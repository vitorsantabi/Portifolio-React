// components/ProjetoCard.jsx
export default function ProjetoCard({ titulo, descricao, imgSrc, githubLink }) {
    return (
        <div className="projeto-card">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <div className='gif'>
                <img src={imgSrc} alt={`Imagem do projeto ${titulo}`} />
            </div>
            <div className='botao'>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    Acesse o Github do Projeto
                </a>
            </div>
        </div>
    );
}

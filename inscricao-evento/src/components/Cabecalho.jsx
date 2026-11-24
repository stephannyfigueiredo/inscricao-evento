import './Cabecalho.css'

function Cabecalho({ titulo, subtitulo }) {
  return (
    <header className="cabecalho">
      <h1 className="cabecalho_titulo">{titulo}</h1>
      <p className="cabecalho_subtitulo">{subtitulo}</p>
    </header>
  )
}

export default Cabecalho
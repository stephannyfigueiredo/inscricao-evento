import './ListaInscritos.css'

function ListaInscritos({ inscritos }) {
  return (
    <section className="lista">
      <h2>Inscritos ({inscritos.length})</h2>

      {inscritos.length === 0 ? (
        <p className="lista_vazia">Nenhuma inscrição ainda.</p>
      ) : (
        <ul>
          {inscritos.map((pessoa) => (
            <li key={pessoa.id} className="lista_item">
              <strong>{pessoa.nome}</strong>
              <span>{pessoa.email}</span>
              <span className="lista_oficina">{pessoa.oficina}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaInscritos
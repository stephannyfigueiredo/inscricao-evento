// src/components/CampoTexto.jsx
import './CampoTexto.css'

function CampoTexto({ id, label, tipo = 'text', valor, aoAlterar, placeholder }) {
  return (
    <div className="campo-texto">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={(evento) => aoAlterar(evento.target.value)}
      />
    </div>
  )
}

export default CampoTexto
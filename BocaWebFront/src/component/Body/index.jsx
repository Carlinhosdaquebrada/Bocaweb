export const Body = ({odas})  =>{
    return (
      <div>
          <p> {odas.length} odas</p>
          <div className='lista'>
          {odas.map(oda => (
            <div className="objeto-oda" key={oda._id}>
              <h1>Nome: {oda.nome}</h1>
              <p> Usuário: {oda.usuario} </p>
              <p> Descrição: {oda.descricao}</p>
              <p> Data Inclusão: {oda.data_inclusao}</p>
              <p> Palavras Chave: {oda.palavras_chave}</p>
            </div>
          ))}
        </div>
      </div>
  )
}
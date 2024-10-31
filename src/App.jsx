import { useState } from 'react'
import Perfil from './Components/Perfil'
import ReposList from './Components/ReposList'


function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  const [nomeUsuario, setNomeUsuario] = useState('')

  //mount quando um arquivo é montado
  //update quando é atualizado
  //onmount quando é desmontado

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

    </>
  )
}

export default App

import React from 'react'
import ListaVagas from './containers/ListaVagas'
import { Vaga } from './types/Vaga'

const vagas: Vaga[] = [
  {
    titulo: 'Desenvolvedor Front-end',
    localizacao: 'São Paulo',
    nivel: 'Júnior',
    modalidade: 'Remoto',
    salarioMin: 5000,
    salarioMax: 8000,
    requisitos: ['React', 'JavaScript', 'HTML', 'CSS']
  }
  // ... outras vagas
]

const App = () => {
  return (
    <div>
      <ListaVagas vagas={vagas} />
    </div>
  )
}

export default App

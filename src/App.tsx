// src/App.tsx
import React from 'react'
import ListaVagas from './containers/ListaVagas'
import { Vaga } from './types/Vaga'

const vagas: Vaga[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor Front-end',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    tipo: 'CLT',
    empresa: 'Tech Corp',
    descricao:
      'Estamos buscando um desenvolvedor front-end com experiência em React e TypeScript.'
  },
  {
    id: 2,
    titulo: 'Desenvolvedor Back-end',
    localizacao: 'São Paulo',
    nivel: 'Pleno',
    tipo: 'PJ',
    empresa: 'Dev Solutions',
    descricao:
      'Procuramos um desenvolvedor back-end com conhecimento em Node.js e banco de dados SQL.'
  }
  // Adicione mais vagas conforme necessário
]

const App: React.FC = () => {
  return (
    <div>
      {/* Altere "Vagas" para "vagas" */}
      <ListaVagas vagas={vagas} />
    </div>
  )
}

export default App

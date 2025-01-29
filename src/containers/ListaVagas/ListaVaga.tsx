import React from 'react'
import styled from 'styled-components'
import { Vaga } from '../../types/Vaga'

interface ListaVagasProps {
  vagas: Vaga[]
}

const VagasContainer = styled.div`
  // ... seus estilos
`

const ListaVagas: React.FC<ListaVagasProps> = ({ vagas }) => {
  return (
    <VagasContainer>
      {vagas.map((vaga) => (
        <Vaga key={vaga.id} {...vaga} />
      ))}
    </VagasContainer>
  )
}

export default ListaVagas

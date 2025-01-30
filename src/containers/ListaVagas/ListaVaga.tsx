// src/containers/ListaVagas/ListaVaga.tsx
import React from 'react'
import styled from 'styled-components'
import { Vaga } from '../../types/Vaga'

// Defina os componentes estilizados
const VagaContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
`

const VagaTitulo = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 8px;
`

const VagaInfo = styled.p`
  color: #666;
  font-size: 1rem;
  margin: 4px 0;
`

// Defina a interface para as props
interface ListaVagasProps {
  vagas: Vaga[] // A propriedade é chamada "vagas"
}

// Componente ListaVagas
const ListaVagas: React.FC<ListaVagasProps> = ({ vagas }) => {
  return (
    <div>
      {vagas.map((vaga) => (
        <VagaContainer key={vaga.id}>
          <VagaTitulo>{vaga.titulo}</VagaTitulo>
          <VagaInfo>
            <strong>Localização:</strong> {vaga.localizacao}
          </VagaInfo>
          <VagaInfo>
            <strong>Nível:</strong> {vaga.nivel}
          </VagaInfo>
          <VagaInfo>
            <strong>Tipo:</strong> {vaga.tipo}
          </VagaInfo>
          <VagaInfo>
            <strong>Empresa:</strong> {vaga.empresa}
          </VagaInfo>
          <VagaInfo>
            <strong>Descrição:</strong> {vaga.descricao}
          </VagaInfo>
        </VagaContainer>
      ))}
    </div>
  )
}

export default ListaVagas

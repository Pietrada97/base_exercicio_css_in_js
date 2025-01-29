import React from 'react'
import styled from 'styled-components'
import Vaga from './Vaga'

const VagasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ListaVagas = () => {
  const vagas = [
    {
      titulo: 'Desenvolvedor Frontend',
      localizacao: 'São Paulo',
      nivel: 'Pleno',
      modalidade: 'Presencial',
      salarioMin: 3000,
      salarioMax: 5000,
      requisitos: ['React', 'JavaScript', 'CSS']
    },
    {
      titulo: 'Desenvolvedor Backend',
      localizacao: 'Remoto',
      nivel: 'Sênior',
      modalidade: 'Remoto',
      salarioMin: 6000,
      salarioMax: 9000,
      requisitos: ['Node.js', 'Express', 'MongoDB']
    }
    // Adicione mais vagas conforme necessário
  ]

  return (
    <VagasContainer>
      {vagas.map((vaga, index) => (
        <Vaga key={index} {...vaga} />
      ))}
    </VagasContainer>
  )
}

export default ListaVagas

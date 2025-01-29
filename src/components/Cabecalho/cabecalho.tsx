import React from 'react'
import styled from 'styled-components'

const CabecalhoStyled = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

// Criando um componente React que usa o estilo
const Cabecalho = () => {
  return (
    <CabecalhoStyled>
      <h1>Site de Vagas</h1>
    </CabecalhoStyled>
  )
}

export default Cabecalho

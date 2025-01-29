// Em src/components/Cabecalho/index.tsx
import React from 'react'
import styled from 'styled-components'

// Definindo o estilo usando styled-components
const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
`

const CabecalhoComponent = () => (
  <Header>
    <h1>EBAC Jobs</h1>
  </Header>
)

export default CabecalhoComponent

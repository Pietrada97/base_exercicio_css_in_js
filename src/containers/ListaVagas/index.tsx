import React from 'react'
import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

// Estilos com styled-components
const VagaContainer = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  list-style: none;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const VagaDetalhes = styled.ul`
  list-style: none;
  padding-left: 0;
`

const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const Vaga = (props: Props) => (
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaDetalhes>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </VagaDetalhes>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
)

export default Vaga

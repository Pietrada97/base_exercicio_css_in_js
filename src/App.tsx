import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle from './GlobalStyle' // Importe o arquivo de estilos globais

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App

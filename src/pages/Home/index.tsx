import BotaoAdicionar from '../../components/BotaoAdicionar'
import DrawerELista from '../../containers/DrawerELista'

const Home = () => {
  return (
    <>
      <DrawerELista mostrarFiltros />
      <BotaoAdicionar />
    </>
  )
}

export default Home

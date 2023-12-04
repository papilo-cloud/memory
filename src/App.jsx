import { Game } from './components/Game'
import ProviderContext, { useTasks } from './hooks/useContext';
import { Menu } from './components/Menu';
import { Modal } from './components/modal/Modal';

function App() {
  const {grid} = useTasks()
  console.log(grid)
  return (
      <ProviderContext >
        <Menu />
        <Game />
        {/* <Modal /> */}
      </ProviderContext>
  )
}

export default App

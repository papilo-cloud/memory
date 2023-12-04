import ProviderContext, { useTasks } from './hooks/useContext';
import { Menu } from './components/Menu';
import { Modal } from './components/modal/Modal';

function App() {

  return (
      <ProviderContext >
        <Menu />
        {/* <Modal /> */}
      </ProviderContext>
  )
}

export default App

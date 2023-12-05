import ProviderContext, { useTasks } from './hooks/useContext';
import { Menu } from './components/Menu';

function App() {

  return (
      <ProviderContext >
        <Menu />
      </ProviderContext>
  )
}

export default App
 
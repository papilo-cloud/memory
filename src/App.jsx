import { useReducer, useState, useEffect } from 'react'
import { Game } from './components/Game'
import ProviderContext from './hooks/useContext';
import { Menu } from './components/Menu';
import { Modal } from './components/modal/Modal';


function App() {

  const [grid, setGrid] = useState([])
  const [selectRandom, setSelectRandom] = useState([])


  return (
      <ProviderContext >
        <Menu useGrid={useGrid} />
        <Game selectRandom={selectRandom} />
        <Modal />
      </ProviderContext>
  )
}

export default App

import { useReducer, useState, useEffect } from 'react'
import { Game } from './components/Game'
import ProviderContext from './hooks/useContext';
import { Menu } from './components/Menu';
import { Modal } from './components/modal/Modal';


function App() {
  return (
      <ProviderContext >
        <Menu />
        <Game />
        <Modal />
      </ProviderContext>
  )
}

export default App

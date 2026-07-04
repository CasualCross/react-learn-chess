import { useReducer } from 'react';
import './App.css'
import Board from './components/Board/Board.jsx';
import AppContext from './contexts/Context.jsx';
import { reducer } from './reducer/reducer.jsx';
import { initGameState } from './constants.jsx';

function App() {

  const [appState, dispatch] = useReducer(reducer, initGameState)

  const providerState = {
    appState,
    dispatch
  }

  return (
    <AppContext.Provider value={providerState}>
      <div className='App'>
          <Board/>
      </div>
    </AppContext.Provider>
  )
}

export default App

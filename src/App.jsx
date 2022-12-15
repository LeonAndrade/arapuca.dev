import VectorBall from './canvas/VectorBall';

import './App.css';

function App() {

  return (
    <div className="App">
      <h1 className='header'>Arapuca.dev</h1>
      <div className="main">
        <p className='subheader'>
          Arapucas Computacionais são artefatos digitais para captura e processamento de símbolos.
        </p>
        <p>
          Ideias sobre literacia tecnológica, cidadania digital e modos de navegação em espaços abstratos.
        </p>
        <VectorBall />
      </div>
      <p>Em Breve</p>
    </div>
  )
}

export default App

import VectorBall from './components/VectorBall';

import './App.css';

function App() {

  return (
    <div className="App">
      <h1 className='header'>Arapuca.dev</h1>
      <div className="main">
        <div className="intro">
          <p className='subheader'>
            <strong>Arapucas Computacionais</strong> são artefatos digitais para captura e processamento de símbolos.
          </p>
          <p>
            Ideias sobre <strong>literacia tecnológica</strong>, <strong>cidadania digital</strong> e modos de navegação em espaços abstratos.
          </p>
        </div>
        <VectorBall />
      </div>
    </div>
  )
}

export default App

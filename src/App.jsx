import VectorBall from './components/VectorBall';

import './App.css';
import github from  './assets/github2.png'

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
      <footer className="footer">
        <a href="http://github.com/LeonAndrade/arapuca.dev"><img src={github} alt="github logo" /></a>
      </footer>
    </div>
  )
}

export default App

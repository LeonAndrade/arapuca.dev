import Header from '../components/Header';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import VectorBall from '../components/VectorBall';

function Home() {

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Intro />
        <VectorBall />
      </div>
      <Footer />
    </div>
  )
}

export default Home

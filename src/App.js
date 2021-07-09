import Header from './comp/Header'
import SeccionUno from './comp/SeccionUno';
import SeccionDos from './comp/SeccionDos';
import SeccionTres from './comp/SeccionTres';
import Footer from './comp/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SeccionUno />
      <SeccionDos />
      <SeccionTres />
      <Footer />
    </div>
  );
}

export default App;

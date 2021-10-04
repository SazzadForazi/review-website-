import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './components/Contactus/Contactus';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';


function App() {
  return (
    <div>
      <Header></Header>
      <Contactus></Contactus>
      <Footer></Footer>
      <About></About>

    </div>
  );
}

export default App;

import './App.css';
import Catago from './components/Catago';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NextCatago from './components/NextCatago';
import NextCatago2 from './components/NextCatago2';
import NextCatago3 from './components/NextCatago3';
import NextCatago4 from './components/NextCatago4';
import Photo from './components/Photo';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Photo/>
       <Catago/>
       <Content/>
       <NextCatago/>
       <NextCatago2/>
       <NextCatago3/>
       <NextCatago4/>
    <Footer/>
    </div>
  );
}

export default App;

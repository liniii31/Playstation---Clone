import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import Products from './Products/Products';
import Poster from './Poster/Poster';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Products/>
      <Poster/>
    </div>
  );
}

export default App;

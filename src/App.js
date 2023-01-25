import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import Products from './Products/Products';
import Poster from './Poster/Poster';
import Slider from './Slider/Slider';
import ProductSlider from './ProductSlider/ProductSlier';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Products/>
      <Poster/>
      <Slider/>
      <ProductSlider/>
    </div>
  );
}

export default App;

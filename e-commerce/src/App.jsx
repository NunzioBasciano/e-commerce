
import Button from './components/button/Button';
import IconCart from './components/icons/IconCart.jsx';
import Counter from './components/counter/Counter.jsx';
import Header from './components/header/Header.jsx';
import ProductLightBox from './components/productLightbox/ProductLightBox.jsx';



import './App.css'

function App() {


  return (
    <div>
      <Header />
      <ProductLightBox />
      <Button text={'Add to cart'}>
        <IconCart fill={'var(--black'} />
      </Button>
      <Counter />
    </div>

  )
}

export default App

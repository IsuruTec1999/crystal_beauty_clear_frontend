import './App.css'
import Header from './components/header'
import ProductCard from './components/product_card'

function App() {


  return (
    <div className="">
      <Header/>
      <ProductCard name="Product 1" description="Description 1" price="$10.00" />
      <ProductCard name="Product 2" description="Description 2" price="$20.00" />
      <ProductCard name="Product 3" description="Description 3" price="$30.00" />
    </div>
  )
}
  
export default App

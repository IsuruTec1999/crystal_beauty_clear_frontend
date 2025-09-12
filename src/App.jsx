import './App.css'
import Header from './components/header'
import ProductCard from './components/product_card'

function App() {


  return (
    <div className='w-full h-screen bg-pink-200'>
    <div className="w-[500px] flex flex-col justify-center items-center h-[500px] bg-gray-200">
      <div className='w-[90px] h-[90px] bg-red-500'>
      </div>
      <div className='w-[90px] h-[90px] bg-yellow-500'>
      </div>
      <div className='w-[90px] h-[90px] bg-blue-500'>
      </div>
      <div className='w-[90px] h-[90px] bg-green-500'>
      </div>
    </div>
    </div>
  )
}
  
export default App

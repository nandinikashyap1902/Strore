import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Wishlisting from './Pages/Wishlisting'
import ProductsInBag from './Pages/ProductsInBag'
import WesternWear from './Pages/Filters'

function App() {
    return (
      <>
      
     <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/signIn" element={<SignIn/>}/>
<Route path="/wishlists" element={<Wishlisting/>}/>
<Route path="/Bag" element={<ProductsInBag/>}/>
<Route path="/Westernwear" element={<WesternWear/>}/>
</Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Wishlisting from './Pages/Wishlisting'
import WesternWear from './Pages/WesternWear'
import ProductDetail from './Pages/ProductDetail'
import WomenBags from './Pages/WomenBags'
import { westernWear } from './Data/products/westernWear'
function App() {
  
    return (
      <>
      
     <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/signIn" element={<SignIn/>}/>
<Route path="/wishlists" element={<Wishlisting/>}/>
<Route path="/WomenBags" element={<WomenBags/>}/>
<Route path="/Western-wear" element={<WesternWear items={westernWear}/>}/>
<Route path='/productdetail' element={<ProductDetail/>}/>
</Routes>
     
     </BrowserRouter>
     
    </>
  )
}

export default App

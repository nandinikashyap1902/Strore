import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Wishlisting from './Pages/Wishlisting'
import WesternWear from './Pages/WesternWear'
import ProductDetail from './Pages/ProductDetail'
import WomenBags from './Pages/WomenBags'
import { westernWear } from './Data/products/westernWear'
import Filters from './Pages/Filters'
import Bags from './Data/products/Bags'
import footwear from './Data/products/Footwear'
import FootWear from './Pages/FootWear'
import Accesories from './Pages/Accesories'
import accessory from './Data/products/Accessories'
function App() {
  
    return (
      <>
      
     <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/signIn" element={<SignIn/>}/>
<Route path="/wishlists" element={<Wishlisting/>}/>
<Route path="/WomenBags" element={<WomenBags items={Bags}/>}/>
<Route path="/Western-wear" element={<WesternWear items={westernWear}/>}/>
<Route path='/productdetail' element={<ProductDetail/>}/>
<Route path="/Footwear" element={<FootWear items={footwear}/>}/>
<Route path='/acessories'element={<Accesories items={accessory}/>}/>
</Routes>
     
     </BrowserRouter>
     
    </>
  )
}

export default App


import Header from './components/header/Header';
import Home from './components/header/home/Home';
import DetailView from './components/Details/Detailview';
import Cart from './components/cart/cart'
import { Box } from '@mui/material';
import DataProvider from './context/dataProvider';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import CheckoutSuccess from './components/Payment/checkoutSuccess';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
     <Header/>
     <Box style={{marginTop:54}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<DetailView/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout-success' element={<CheckoutSuccess/>}/>
      </Routes>
     </Box>
     </BrowserRouter>
    </DataProvider>
  );
}

export default App;

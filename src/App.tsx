import { lazy, Suspense } from 'react'
// import { SeriesProps } from './interfaces/SeriesProps'
// import Form from './components/Form'
// import List from './components/List'
import { Routes, Route, useLocation } from 'react-router-dom'

const Login = lazy(()=> import('./pages/Auth/Login'))
const Register = lazy(()=> import('./pages/Auth/Register'))
const Dashboard = lazy(()=> import('./pages/Dashboards/Dashboard'))
const Product = lazy(()=> import('./pages/Product/Product'))
const Detail = lazy(()=> import('./components/Products/ProductDetail'))
const Cart = lazy(()=> import('./pages/Cart/Cart'))

import {Loading} from './components/loading'
import Nav from './components/Nav'

function App() {
  // const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([]);
  const location = useLocation();
  const showNav = !['/login', '/register'].includes(location.pathname); 
  return (
    // <div>
    //   <Form seriesList={seriesList} setSeriesList={setSeriesList} />
    //   <List seriesList={seriesList} />
    // </div>

    <>
      <Suspense fallback={<div><Loading /></div>}>
        {showNav && <Nav />}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/detail/:productId' element={<Detail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
// Bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// custom css
import "./assets/css/style.scss"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// React router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Contact from './components/frontend/Contact';
import Product from './components/frontend/Products/Product';
// products
import HomeTextile from './components/frontend/Products/HomeTextile/HomeTextile';
import Fabric from './components/frontend/Products/Fabric';
import InstitutionGarments from './components/frontend/Products/InstitutionalGarments/InstitutionalGarments';
import InstitutionalTextile from './components/frontend/Products/InstitutionalTextile/InstitutionalTextile';
import Garments from './components/frontend/Products/Garments/Garments';
import Bedding from './components/frontend/Products/HomeTextile/Bedding';
import Cushions from './components/frontend/Products/HomeTextile/Cushions';

import Weaving from './components/frontend/Operations/Weaving'
import ScrollToTop from './components/common/ScrollToTop';

import Login from './components/admin/Login';
import RequireAuth from './components/common/RequireAuth';
import Dashboard from './components/admin/Dashboard';

import { default as ProductShow } from './components/admin/Product/Show'
import { default as ProductCreate } from './components/admin/Product/Create'
import { default as ProductEdit } from './components/admin/Product/Edit'

import {default as OperationShow} from './components/admin/Operations/Show'
import {default as OperationCreate} from './components/admin/Operations/Create'
import {default as OperationEdit} from './components/admin/Operations/Edit'

import { default as TestimonialShow } from './components/admin/Testimonial/Show'
import { default as TestimonialCreate } from './components/admin/Testimonial/Create'
import { default as TestimonialEdit } from './components/admin/Testimonial/Edit'
import Processing from './components/frontend/Operations/Processing';
import RotaryPrinting from './components/frontend/Operations/RotaryPrinting';
import DigitalPrinting from './components/frontend/Operations/DigitalPrinting';
import Stitching from './components/frontend/Operations/Stitching';
import ProductDevelopment from './components/frontend/Operations/ProductDevelopment';
import Certificate from './components/frontend/Certificate';
import QualityCompliance from './components/frontend/QualityCompliance';
import CodeOfconduct from  './components/frontend/CodeOfconduct'
import Sustainability from './components/frontend/Sustainability';
function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/certificates' element={<Certificate/>} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/quality-compliance' element={<QualityCompliance />} />
          <Route path='/code-of-conduct' element={<CodeOfconduct/>} />
          <Route path='/sustainability' element={<Sustainability/>} />

          {/* products */}
          <Route path='/products/fabric' element={<Fabric />} />
          <Route path='/products/home-textile' element={<HomeTextile />} />
          <Route path='/products/home-textile/bedding' element={<Bedding />} />
          <Route path='/products/home-textile/cushions' element={<Cushions />} />
          <Route path='/products/institutional-garments' element={<InstitutionGarments />} />
          <Route path='/products/institutional-textile' element={<InstitutionalTextile />} />
          <Route path='/products/garments' element={<Garments />} />
          <Route path='/products' element={<Product />} />


          {/* Operations */}
          <Route path='/operations/weaving' element={<Weaving />} />
          <Route path='/operations/processing' element={<Processing />} />
          <Route path='/operations/rotary-printing' element={<RotaryPrinting />} />
          <Route path='/operations/digital-printing' element={<DigitalPrinting />} />
          <Route path='/operations/stitching' element={<Stitching/>} />
          <Route path='/operations/product-development' element={<ProductDevelopment/>} />

          
          {/* Admin */}
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />


          <Route path='/admin/products' element={<RequireAuth><ProductShow /></RequireAuth>} />
          <Route path='/admin/products-create' element={<RequireAuth><ProductCreate /></RequireAuth>} />
          <Route path='/admin/products-edit/:id' element={<RequireAuth><ProductEdit /></RequireAuth>} />

          <Route path='/admin/operations' element={<RequireAuth><OperationShow/></RequireAuth>} />
          <Route path='/admin/operations-create' element={<RequireAuth><OperationCreate/></RequireAuth>} />
          <Route path='/admin/operations-edit/:id' element={<RequireAuth><OperationEdit/></RequireAuth>} />



          <Route path='/admin/testimonials' element={<RequireAuth><TestimonialShow /></RequireAuth>} />
          <Route path='/admin/testimonials-create' element={<RequireAuth><TestimonialCreate /></RequireAuth>} />
          <Route path='/admin/testimonials-edit/:id' element={<RequireAuth><TestimonialEdit /></RequireAuth>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import Header from '../../../common/Header'
import Footer from '../../../common/Footer'
import Hero from '../../../common/Hero'
import SidebarFrontend from '../../../common/SidebarFrontend'
import { Link } from 'react-router-dom'
import Banner from '../../../../assets/images/products/HomeTextile/banner-1.jpg'
import Curtains from '../../../../assets/images/products/HomeTextile/Curtains/1.jpg'
import Cushions from '../../../../assets/images/products/HomeTextile/Cushions/1.webp'
const HomeTextile = () => {
  return (
    <>
      <Header />
      <main>
        <Hero heading={'Products'} subheading={'/ Home Textile'} />
        <section className='section-product container py-5'>
          <div className="row py-5">
            <div className="col-md-8">
              <h2> Home Textile</h2>
              <img src={Banner} alt="" width='100%' className='rounded' />
              <div className="card border-0">
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum vitae blanditiis totam non, sequi voluptatibus quibusdam. Expedita fuga itaque earum consequatur enim nostrum eos doloremque. Magni nulla dolores modi provident magnam eveniet nesciunt. Facilis magnam quaerat ad cum, quod, dolorum ipsam ea aspernatur dignissimos similique excepturi ipsum dolor natus nobis laboriosam accusantium. Amet, nihil? Nemo maiores, aspernatur dolorum iste natus eum harum corporis sunt, placeat nobis quaerat dolorem explicabo tenetur id laudantium modi, laborum voluptatum ab eaque nam officia quidem tempore vel! Rerum, temporibus possimus quisquam voluptatum dicta iure animi enim necessitatibus voluptatibus sunt a neque minus repellat cupiditate?</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <SidebarFrontend/>
            </div>
          </div>
          <div className="row">
            <h2 className='mb-4'>Products</h2>
            <div className="col-md-3">
              <div className="product-grid">
                <div className="product-image">
                  <Link to='/products/home-textile/bedding' className="image">
                    <img src={Banner} />
                  </Link>
                  <div className='product-links'>
                    <h3></h3>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title"><Link to='/products/home-textile/bedding'>Bedding</Link></h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-grid">
                <div className="product-image">
                  <Link to='' className="image">
                    <img src={Curtains}/>
                  </Link>
                  <div className='product-links'>
                    <h3></h3>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title"><a href="#">Curtains</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-grid">
                <div className="product-image">
                  <Link to="/products/home-textile/cushions" className="image">
                    <img src={Cushions} />
                  </Link>
                  <div className='product-links'>
                    <h3></h3>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="title"><Link to="/products/home-textile/cushions">Cushions</Link></h3>
                </div>
              </div>
            </div>
           
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomeTextile
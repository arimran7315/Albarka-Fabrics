import React, { useEffect, useState } from 'react'
import Header from '../../../common/Header'
import Hero from '../../../common/Hero'
import SidebarFrontend from '../../../common/SidebarFrontend'
import Footer from '../../../common/Footer'
import Banner from '../../../../assets/images/products/InstitutionalGarments/banner-1.png'
import { Link } from 'react-router-dom'
import { apiUrl, fileUrl } from '../../../common/http'
const InstitutionalGarments = () => {
  const [products, setProducts] = useState('');
  const fetchProcess = async () => {
    const res = await fetch(apiUrl + 'product/Institutional Garments/none', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const result = await res.json();
    setProducts(result.data);
    console.log(result.data);
  }
  useEffect(() => {
    fetchProcess();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero heading={'Products'} subheading={'/ Institutional Garments'} />
        <section className="section-product container py-5">
          <div className="row py-5">
            <div className="col-md-8">
              <h2> Institutional Garments </h2>
              <img src={Banner} alt="" width='100%' className='rounded' />
              <div className="card border-0">
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum vitae blanditiis totam non, sequi voluptatibus quibusdam. Expedita fuga itaque earum consequatur enim nostrum eos doloremque. Magni nulla dolores modi provident magnam eveniet nesciunt. Facilis magnam quaerat ad cum, quod, dolorum ipsam ea aspernatur dignissimos similique excepturi ipsum dolor natus nobis laboriosam accusantium. Amet, nihil? Nemo maiores, aspernatur dolorum iste natus eum harum corporis sunt, placeat nobis quaerat dolorem explicabo tenetur id laudantium modi, laborum voluptatum ab eaque nam officia quidem tempore vel! Rerum, temporibus possimus quisquam voluptatum dicta iure animi enim necessitatibus voluptatibus sunt a neque minus repellat cupiditate?</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <SidebarFrontend />
            </div>
          </div>
          <div className="row mt-5">
            {
              products && products.map(product => (
                <div className="col-md-3" key={product.id}>
                  <div className="product-grid">
                    <div className="product-image">
                      <Link to='/operations/processing' className="image">
                        <img src={fileUrl + 'uploads/products/small/' + product.image} alt={product.name} />
                      </Link>
                      <div className='product-links'>
                        <h3></h3>
                      </div>
                    </div>
                    <div className="product-content">
                      {/* <h3 className="title">{product.name}</h3> */}
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default InstitutionalGarments
import React, { useEffect, useState, useCallback } from 'react';
import Header from '../../../common/Header';
import Hero from '../../../common/Hero';
import SidebarFrontend from '../../../common/SidebarFrontend'
import Footer from '../../../common/Footer';
import { Link } from 'react-router-dom';
import { apiUrl, fileUrl } from '../../../common/http';

const Bedding = () => {
    const [products, setProducts] = useState([]);

    const fetchBedding = useCallback(async () => {
        try {
            const res = await fetch(`${apiUrl}product/Home Textile/bedding`);
            const result = await res.json();
            setProducts(result?.data || []);
        } catch (error) {
            console.error("Error fetching bedding products:", error);
        }
    }, []);

    useEffect(() => {
        fetchBedding();
    }, [fetchBedding]);

    return (
        <>
            <Header />
            <main>
                <Hero heading="Home Textile" subheading="/ Bedding" />
                <section className="section-product container py-5">
                    <div className="row py-5">
                        <div className="col-md-8">
                            <div className="row">
                                {products?.length > 0 ? (
                                    products.map((product) => (
                                        <div className="col-md-4 mt-3" key={product.id}>
                                            <div className="product-grid">
                                                <div className="product-image">
                                                    <Link to="/products/home-textile/bedding" className="image">
                                                        <img
                                                            src={`${fileUrl}uploads/products/small/${product.image}`}
                                                            alt={product.name}
                                                            loading="lazy" // Optimize image loading
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="product-content">
                                                    <h3 className="title">
                                                        <Link to="/products/home-textile/bedding">Bedding</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No products found.</p>
                                )}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <SidebarFrontend/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default React.memo(Bedding);

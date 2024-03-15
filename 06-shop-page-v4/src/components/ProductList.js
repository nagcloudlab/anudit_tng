import React, { useState, useEffect } from 'react'
import Product from './Product'
import { getProducts } from '../api/products'
import useOffline from '../hooks/offine'


function ProductList(props) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(data => setProducts(data))
    }, [])

    const rederProduct = (product) => {
        return (
            <div className="list-group-item">
                <Product product={product} />
            </div>
        )
    }

    const renderProducts = () => {
        return products.map(product => {
            return (
                <div key={product.id} className="mt-3 list-group">
                    {rederProduct(product)}
                </div>
            )
        })
    }

    return renderProducts()

}

export default ProductList
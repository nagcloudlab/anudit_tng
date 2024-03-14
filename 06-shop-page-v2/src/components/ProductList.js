import React, { useState } from 'react'
import Product from './Product'


function ProductList(props) {
    const { onBuy } = props
    const [products] = useState([
        {
            id: 1,
            name: "laptop",
            price: 10000.00,
            description: "good laptop",
            image: "images/Laptop.png",
        },
        {
            id: 2,
            name: "mobile",
            price: 10000.00,
            description: "good mobile",
            image: "images/Mobile.png",
        }
    ])


    const rederProduct = (product) => {
        return (
            <div className="list-group-item">
                <Product onBuy={onBuy} product={product} />
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
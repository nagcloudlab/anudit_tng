import { useState } from "react";


function App() {

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

  const [currentTab, setCurrentTab] = useState(1)


  const handleTabChange = (e, tabIndex) => {
    e.preventDefault()
    setCurrentTab(tabIndex)
  }

  const renderTabPanel = (product) => {
    switch (currentTab) {
      case 1: return <div>{product.description}</div>
      case 2: return <div>Not Yet</div>
      case 3: return <div>None Yet</div>
      default: return null
    }
  }

  const rederProduct = (product) => {
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-4">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-8">
            <div>{product.name}</div>
            <div>&#8377;{product.price}</div>
            <button className="btn btn-primary">Add to Cart</button>
            <ul className="mt-2 nav nav-tabs">
              <li className="nav-item">
                <a onClick={e => handleTabChange(e, 1)} className={`nav-link ${currentTab === 1 ? 'active' : ''}`} href="/">Description</a>
              </li>
              <li className="nav-item">
                <a onClick={e => handleTabChange(e, 2)} className={`nav-link ${currentTab === 2 ? 'active' : ''}`} href="/">Specification</a>
              </li>
              <li className="nav-item">
                <a onClick={e => handleTabChange(e, 3)} className={`nav-link ${currentTab === 3 ? 'active' : ''}`} href="/">Reviews</a>
              </li>
            </ul>
            {renderTabPanel(product)}
          </div>
        </div>
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

  return (
    <div className="container">
      <div className="display-1">shop-IT</div>
      <hr />
      {renderProducts()}
    </div>
  );
}

export default App;

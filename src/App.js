import React from 'react';
import AmazonFooter from './components/footer';
import CardList from './components/cardList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const products = [
    {
      name: "Product 1",
      price: 19.99,
      image: "https://www.iphoned.nl/wp-content/uploads/2023/06/iphone-15-nieuwe-renders.jpg",
      description: "Description of Product 1"
    },
    {
      name: "Product 2",
      price: 24.99,
      image: "https://mobilepriceall.com/wp-content/uploads/2022/09/Apple-iPhone-14-1024x1024.jpg",
      description: "Description of Product 2"
    },
    {
      name: "Product 3",
      price: 29.99,
      image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg",
      description: "Description of Product 3"
    },
    {
      name: "Product 4",
      price: 34.99,
      image: "https://itechstore.co.in/uploads/products/15-hero.jpg",
      description: "Description of Product 4"
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        <CardList products={products} />
        </div>
        <div className="col-md-3">
          <CardList products={products} />
        </div>
        <div className="col-md-3">
          <CardList products={products} />
        </div>
        <div className="col-md-3">
          <CardList products={products} />
        </div>
        
      </div>
      <AmazonFooter />
    </div>
  );
}

export default App;

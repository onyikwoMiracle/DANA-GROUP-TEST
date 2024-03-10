import { useEffect, useState } from "react";
import "./ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const staticProducts = [
      {
        id: 1,
        name: "Shoe",
        price: "500",
      },
      {
        id: 2,
        name: "Bike",
        price: "1000",
      },
      {
        id: 3,
        name: "Airplane",
        price: "1500",
      },
      {
        id: 4,
        name: "Train",
        price: "2000",
      },
      {
        id: 5,
        name: "Car",
        price: "2500",
      },
      {
        id: 6,
        name: "Shoe",
        price: "500",
      },
      {
        id: 7,
        name: "Bike",
        price: "1000",
      },
      {
        id: 8,
        name: "Airplane",
        price: "1500",
      },
      {
        id: 9,
        name: "Train",
        price: "2000",
      },
      {
        id: 10,
        name: "Car",
        price: "2500",
      },
    ];

    setProducts(staticProducts);
    setFilteredProducts(staticProducts);
  }, []);

  // Filter products based on search query
  const handleFilter = (query) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.price.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-page-container">
      <div className="container">
        <header>
          <h2>DANA HOUSE PRODUCT</h2>
        </header>

        <div className="search">
          <input
            type="text"
            placeholder="Search"
            id="search-input"
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
      </div>

      <section className="cart-section padding-y mt-4">
        <div className="container">
          <div className="">
            <table className="cart-item-table table table-borderless table-shopping-cart">
              <thead className="text-muted">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;

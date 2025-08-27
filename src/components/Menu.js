import React from "react";

function Menu({ addToCart }) {
  const items = [
    { id: 1, name: "Chocolate Cake", price: 500, image: "/images/Chocolate Cake.jpg" },
    { id: 2, name: "Strawberry Cupcake", price: 120, image: "/images/Strawberry Cupcake.jpg" },
    { id: 3, name: "Croissant", price: 80, image: "/images/Croissant.jpg" },
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <img src={item.image} alt={item.name} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p>Rs. {item.price}</p>
                <button className="btn btn-success" onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Menu;

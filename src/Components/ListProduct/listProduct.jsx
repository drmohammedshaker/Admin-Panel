import React, { useEffect, useState } from "react";
import { XCircle } from "lucide-react";
import "../ListProduct/listProduct.css";
export default function ListProduct() {
  const [allProducts, setAllProducts] = useState([]);

  async function FetchInfo() {
    await fetch("http://localhost:4469/allproducts")
      .then((res) => res.json())
      .then((date) => {
        setAllProducts(date);
      });
  }
  useEffect(() => {
    FetchInfo();
  }, []);

  const RemoveProduct = async (id) => {
    await fetch("http://localhost:4469/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await FetchInfo();
  };
  return (
    <div className="listProduct">
      <h1>All Products List</h1>
      <div className="listProductFormatMain">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listProductAllProduct">
        <hr />
        {allProducts.map((product, i) => {
          return (
            <>
              <div key={i} className="listProductFormatMain listProdctFormat">
                <img
                  src={product.image}
                  alt=""
                  className="listProductImgIcon"
                />
                <p>{product.name}</p>
                <p>${product.oldPrice}</p>
                <p>${product.newPrice}</p>
                <p>{product.category}</p>
                <XCircle
                  className="listProductRemove"
                  onClick={() => {
                    RemoveProduct(product.id);
                  }}
                />
              </div>{" "}
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}

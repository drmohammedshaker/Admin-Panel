import React, { useState } from "react";
import "./addProduct.css";
import uploadArea from "../../assets/upload_area.svg";
import { data } from "react-router-dom";
export default function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "men",
    newPrice: "",
    oldPrice: "",
    description: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4469/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4469/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="addProduct">
      <div className="addProductField">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
          className="textInput"
        />
      </div>
      <div className="addProductPrice">
        <div className="addProductField">
          <p>Price</p>
          <input
            onChange={changeHandler}
            value={productDetails.oldPrice}
            type="text"
            name="oldPrice"
            placeholder="Type here"
            className="textInput"
          />
        </div>
      </div>
      <div className="addProductPrice">
        <div className="addProductField">
          <p>Offer Price</p>
          <input
            onChange={changeHandler}
            value={productDetails.newPrice}
            type="text"
            name="newPrice"
            placeholder="Type here"
            className="textInput"
          />
          <p>Description for the item</p>
          <textarea
            value={productDetails.description}
            onChange={changeHandler}
            type="text"
            name="description"
            placeholder="Type here"
            className="descriptionBox"
          />
        </div>
      </div>
      <div className="addProductField">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="addProductSelector"
        >
          <option value="kids">Kids</option>
          <option value="men">Men</option>
        </select>
      </div>
      <div className="addProductField">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea}
            className="addProductThumbnail"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          addProduct();
        }}
        className="addProductButton"
      >
        Add
      </button>
    </div>
  );
}

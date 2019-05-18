import React from "react"
import Img from "gatsby-image"

const Product = ({ id, title, price, src, image }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={image} alt={title} className="card-img-top" />
        <div className="card-body text-center">
          <h6 className="text-capitalize text-center">{title}</h6>
          <h6 className="card-content">${price}</h6>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={id}
            data-item-name={title}
            data-item-price={price}
            data-item-weight="100"
            data-item-url="https://coffee-shop-powered-with-gatsby.netlify.com/"
            data-item-image={src}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product

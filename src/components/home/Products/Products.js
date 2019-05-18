import React from "react"

import Product from "../Product/Product"
import Title from "../../globals/Title/Title"

const Products = ({ items }) => {
  return (
    <section className="row py-5">
      <div className="container">
        <Title title="Our range of specialities" />
        <div className="row">
          {items.map(({ node: item }) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              src={item.image.fluid.src}
              image={item.image.fluid}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

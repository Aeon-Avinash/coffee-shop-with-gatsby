import React from "react"
import { Link } from "gatsby"
import Title from "../../globals/Title/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="conatiner">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              modi error quae autem corrupti doloribus ad voluptates! Molestiae
              ipsum ipsa quod repellendus itaque natus architecto a libero
              repellat obcaecati modi magnam pariatur culpa, tempore quae
              laborum perferendis alias excepturi eos quas? Error reiciendis
              dolorum esse saepe quasi velit impedit nisi?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info

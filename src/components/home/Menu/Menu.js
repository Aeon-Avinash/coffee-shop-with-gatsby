import React, { Component } from "react"
import Title from "../../globals/Title/Title"
import Img from "gatsby-image"

const getCategories = items => {
  const categories = items.reduce((acc, { node: item }) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category)
    }
    return acc
  }, [])
  return ["all", ...categories]
}

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
      selectedItems: props.items,
      categories: getCategories(props.items),
    }
  }

  handleItems = category => {
    if (category === "all") {
      this.setState({ selectedItems: this.state.items })
    } else {
      this.setState({
        selectedItems: this.state.items.filter(
          ({ node: item }) => item.category === category
        ),
      })
    }
  }

  render() {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />

          {this.state.items.length > 0 ? (
            <React.Fragment>
              {/* // Categories */}
              <div className="row mb-5">
                <div className="col-10 mx-auto text-center">
                  {this.state.categories.map((category, index) => (
                    <button
                      key={index}
                      type="button"
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={this.handleItems.bind(this, category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              {/* // Items */}
              <div className="row">
                {this.state.selectedItems.map(({ node: item }) => (
                  <div
                    key={item.id}
                    className="col-11 col-sm-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={item.image.fixed} alt={item.image.title} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0 text-capitalize">
                          <small>{item.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow font-weight-bold">
                          <small>${item.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{item.description.description}</small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ) : (
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>No Items to display</h1>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default Menu

import React, { Component } from "react"
import Title from "../../globals/Title/Title"

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  handleClick = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    // e.preventDefault()
    const formData = { ...this.state }
    console.log(formData)
    // this.setState({
    //   name: "",
    //   email: "",
    //   message: "",
    // });
  }

  render() {
    return (
      <section className="contact py-5">
        <Title title="contact us" />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action="https://formspree.io/aeonDevWorks@yandex.com"
              method="POST"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={this.state.name}
                  onChange={this.handleClick}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  value={this.state.email}
                  onChange={this.handleClick}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="message"
                  id="message"
                  placeholder="Your message goes here..."
                  row={5}
                  value={this.state.message}
                  onChange={this.handleClick}
                />
              </div>
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact

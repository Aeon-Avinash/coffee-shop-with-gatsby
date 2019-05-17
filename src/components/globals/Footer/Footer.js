import React from "react"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            Regular Joe's Coffee Site built with Gatsby &amp; Love || all rights
            reserved &copy; {new Date().getFullYear().toString()}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

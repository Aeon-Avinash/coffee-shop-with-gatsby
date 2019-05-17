import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ img, imgName, styleClass, title, children }) => {
  return (
    <BackgroundImage fluid={img} className={styleClass} alt={imgName}>
      <h1 className="title text-center text-white text-uppercase display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default BackgroundSection

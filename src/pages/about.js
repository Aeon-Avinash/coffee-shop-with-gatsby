import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection/BackgroundSection"
import Info from "../components/home/Info/Info"

const AboutPage = ({ data }) => {
  const { name, childImageSharp } = data.img
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={childImageSharp.fluid}
        imgName={name}
        styleClass="about-background"
        title="About Us"
      />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage

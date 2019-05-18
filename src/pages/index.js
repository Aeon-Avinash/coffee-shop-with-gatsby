import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection/BackgroundSection"
import Info from "../components/home/Info/Info"
import Menu from "../components/home/Menu/Menu"
import Products from "../components/home/Products/Products"
import Contact from "../components/home/Contact/Contact"

const IndexPage = ({ data }) => {
  const { name, childImageSharp } = data.img
  const menuItems = data.menu.edges
  const productItems = data.products.edges
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={childImageSharp.fluid}
        imgName={name}
        styleClass="default-background"
        title="Regular Joe's"
      />
      <Info />
      <Menu items={menuItems} />
      <Products items={productItems} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      totalCount
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            title
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    products: allContentfulCoffeeProduct {
      totalCount
      edges {
        node {
          id
          title
          price
          image {
            title
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage

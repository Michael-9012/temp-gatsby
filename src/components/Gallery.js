import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)

  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image, i) => {
        const { name } = image
        const pathToImage = getImage(image)
        return (
          <article key={i} className="item">
            <GatsbyImage
              // image={image. //// childImageSharp.gatsbyImageData ///// } = getImage
              image={pathToImage}
              alt="{name}"
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 20px;
  }
  .gallery-img {
    border-radius: 20px;
  }
`

export default Gallery

import React from "react"
import PageInfo from "../components/PageInfo/PageInfo"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const galleryInfo = {
  title: "Gallery",
  paragraph:
    "While artists work from real to the abstract, architects must work from the abstract to the real. ",
}

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
`
const StyledImage = styled(Image)`
  min-width: 400px;
  height: auto;
  object-fit: cover;
  margin: 10px;
`

const PhotoWrappper = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-constent: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`

const SinglePhoto = styled(Image)`
  width: 80%;
  height: auto;
  object-fit: cover;
`

const GalleryPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <PageInfo title={galleryInfo.title} paragraph={galleryInfo.paragraph} />
      <StyledGallery>
        {data.allFile.nodes.map(item => (
          <StyledImage key={item.id} fluid={item.childImageSharp.fluid} />
        ))}
      </StyledGallery>
    </>
  )
}

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default GalleryPage

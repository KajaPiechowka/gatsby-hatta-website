import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

export const aboutQuery = graphql`
  {
    datoCmsAboutMe {
      title
      quotation
      content
      author
      image {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
const AboutMeContentWrapper = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute !important;
  left: 0;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 3rem;
  }
  h3 {
    width: 340px;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
  p {
    padding-top: 40px;
    width: 540px;
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
  span {
    font-weight: bold;
    font-size: 1.6rem;
  }
`
const AboutMeImage = styled(Image)`
  width: 50vw;
  height: 100vh;
  position: absolute !important;
  right: 0 !important;
  top: 0;
`
const SmallContentWrapperTop = styled.div`
  height: 30%;
  border-bottom: 3px solid black;
  padding-left: 90px;
`
const SmallContentWrapperBottom = styled.div`
  height: 50%;
  border-bottom: 3px solid black;
  padding-left: 90px;
`

const AboutPage = () => {
  const data = useStaticQuery(aboutQuery)

  return (
    <>
      {console.log(data)}
      <AboutMeContentWrapper>
        <SmallContentWrapperTop>
          <h1>{data.datoCmsAboutMe.title}</h1>
          <h3>{data.datoCmsAboutMe.quotation}</h3>
        </SmallContentWrapperTop>
        <SmallContentWrapperBottom>
          <p>{data.datoCmsAboutMe.content}</p>
          <span>{data.datoCmsAboutMe.author}</span>
        </SmallContentWrapperBottom>
      </AboutMeContentWrapper>
      <AboutMeImage fluid={data.datoCmsAboutMe.image.fluid} />
    </>
  )
}

export default AboutPage

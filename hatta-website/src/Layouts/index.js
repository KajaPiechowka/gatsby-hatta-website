import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"
import styled from "styled-components"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
  </>
)

export default MainLayout

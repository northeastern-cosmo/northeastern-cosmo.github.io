import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

import Layout from "../components/layout"
import { TitleContainer } from "../pages/mentors"

import WorkInProgress from "../components/work-in-progress/work-in-progess"

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

const Team = () => {
  return (
    <Layout>
      <TeamContainer>
        {/* <TitleContainer>Meet the Team</TitleContainer> */}
        <WorkInProgress />
      </TeamContainer>
    </Layout>
  )
}
export default Team

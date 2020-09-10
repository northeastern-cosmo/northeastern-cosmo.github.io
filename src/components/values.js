import styled from "styled-components"
import SectionContainer from "./section-container"
import Showcase from "./showcase"
import logo from "../components/header-footer/logo.svg"
import { useScrollMonitor } from "scrollmonitor-hooks"
import React, { useRef } from "react"

const Title = styled.p`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 65px;
  padding-top: 80px;
  padding-left: 100px;
  padding-right: 100px;
  max-width: 1100px;
  color: white;
`
const valuesSectionShowcaseProps = {
  itemProps: [
    {
      imgsrc: logo,
      alt: "logo",
    },
    {
      imgsrc: logo,
      alt: "logo",
    },
    {
      imgsrc: logo,
      alt: "logo",
    },
  ],
}

const Values = ({ callbacks }) => {
  const ref = useRef(null)
  useScrollMonitor(ref, callbacks)
  return (
    <SectionContainer>
      <Title>
        Our goals... idk what to put here lol but this is space we can put more
        info
      </Title>
      <Showcase ref={ref} props={valuesSectionShowcaseProps} />
    </SectionContainer>
  )
}

export default Values

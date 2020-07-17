import React, { useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
`

const Major = styled.div`
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;

  margin: 10px 0px;
`

const Info = styled.div`
  font-size: 16px;
  line-height: 16px;
`

const years = {
  1: "1st",
  2: "2nd",
  3: "3rd",
  4: "4th",
  5: "5th",
}

const Mentor = ({ firstName, lastName, year, major, email }) => {
  const [isOpen, setIsOpen] = useState(false)

  const strYear = years[year]

  return (
    <div onClick={() => setIsOpen(prevOpen => !prevOpen)}>
      <Layout>
        <Name>{firstName}</Name>
        <Name>{lastName}</Name>
        <Layout>
          <Major>{major}</Major>
          <Major>concentration</Major>
        </Layout>
        <Info>{`${strYear} Year`}</Info>
        <Info>{email}</Info>
      </Layout>
      {isOpen && <div>hidden information</div>}
    </div>
  )
}

export default Mentor

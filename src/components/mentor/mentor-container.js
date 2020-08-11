import React from "react"
import styled from "styled-components"
import Mentor from "./mentor"
import ContactBox from "./contactBox"

/*
Mentor format:

firstName
lastName
year
major
email 
skills
*/

const mentor1 = {
  firstName: "Anusha",
  lastName: "Arora",
  year: 2,
  major: "CS/business",
  email: "test@test.com",
  skills: <ul>
    <li> java</li>
    <li>SQL</li>
  </ul>,
  work: <ul>
  <li> Product management</li>
  <li>finance internship</li>
</ul>,
}

const mentor2 = {
  firstName: "Katie",
  lastName: "Busemeyer",
  year: 5,
  major: "CS/cognitive psychology",
  email: "test@test.com",
}

const MentorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const MentorContainer = styled.div`
  background: #D9E2FF;
  padding: 20px;
  margin: 20px;

  flex-basis: 20%;`

  
const ContactContainer = styled.div`
background: #A6ADD8;
padding: 20px;
margin 20px;

flex-basis: 20%;
`

const MajorContainer = props => {
  return (
    <div>
      <div>{props.majorName}</div>
      <div>-------</div>
      <MentorsContainer>
        <MentorContainer>
          <Mentor {...mentor1} />
        </MentorContainer>
        <MentorContainer>
          <Mentor {...mentor2} />
        </MentorContainer>
        <MentorContainer>
          <Mentor {...mentor2} />
        </MentorContainer>
        <MentorContainer>
          <Mentor {...mentor2} />
        </MentorContainer>
        <MentorContainer>
          <Mentor {...mentor2} />
        </MentorContainer>
        <ContactContainer>
          <ContactBox />
        </ContactContainer>
      </MentorsContainer> 
    </div>
  )
}

export default MajorContainer

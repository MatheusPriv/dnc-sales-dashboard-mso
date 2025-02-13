import styled from "styled-components";
import loginImage from '../assets/Login-image.svg'

const RegistrationArea = styled.div`
  background: #333;
`

const RegistrationImage = styled.div`
  background-image: url(${loginImage});
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Registration() {
  return(
    <>
      <RegistrationArea>Registration</RegistrationArea>
      <RegistrationImage/>
    </>
  )
}

export default Registration
import styled from "styled-components";
import loginImage from '../assets/Login-image.svg'

const LoginArea = styled.div`
  background: #999;
`

const LoginImage = styled.div`
  background-image: url(${loginImage});
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Login() {
  return(
    <>
      <LoginArea>LOGIN</LoginArea>
      <LoginImage/>
    </>
  )
}

export default Login
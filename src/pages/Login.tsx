import styled from "styled-components";


const LoginArea = styled.div`
  background: #999;
`

const LoginImage = styled.div`
  background-image: url(Login-image.svg);
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
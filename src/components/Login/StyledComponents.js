import styled from 'styled-components'

export const LoginBg = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
`

export const LoginForm = styled.form`
  width: 90%;
  margin: auto;
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 4px #f4f4f4;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginWebsiteLogo = styled.img`
  width: 50%;
  margin-bottom: 50px;
`

export const LoginWebsiteFormSub = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

export const LoginWebsiteFormSubCheckbox = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`

export const LoginLabel = styled.label`
  font-family: Roboto;
  font-size: 14px;
  color: #909090;
  font-weight: 500;
  margin-bottom: 3px;
`

export const LoginLabelCheckbox = styled.label`
  font-family: Roboto;
  font-size: 14px;
  color: #000000;
  font-weight: 500;
`

export const LoginInput = styled.input`
  width: 100%;
  border: solid 1px #e2e8f0;
  border-radius: 5px;
  height: 40px;
  padding: 10px;
`
export const LoginInputCheckbox = styled.input`
  border: solid 1px #e2e8f0;
  border-radius: 5px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  border: 0;
  font-family: Roboto;
  font-weight: 500;
  color: #ffffff;
  font-size: 14px;
`

export const LoginErrorMsg = styled.p`
  font-size: 15px;
  font-family: Roboto;
  color: #ff0000;
  align-self: flex-start;
`

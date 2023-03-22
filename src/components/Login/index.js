import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginBg,
  LoginForm,
  LoginWebsiteLogo,
  LoginWebsiteFormSub,
  LoginWebsiteFormSubCheckbox,
  LoginLabel,
  LoginLabelCheckbox,
  LoginInput,
  LoginInputCheckbox,
  LoginButton,
  LoginErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    isChecked: false,
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = event => {
    this.setState({isChecked: event.target.checked})
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(url, options)
    const jsonData = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(jsonData.jwt_token)
    } else {
      this.onFailureLogin(jsonData.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showErrorMsg, isChecked} = this.state
    const passwordType = isChecked ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginBg>
        <LoginForm onSubmit={this.onSubmitForm}>
          <LoginWebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LoginWebsiteFormSub>
            <LoginLabel htmlFor="username">USERNAME</LoginLabel>
            <LoginInput
              type="text"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.changeUsername}
            />
          </LoginWebsiteFormSub>
          <LoginWebsiteFormSub>
            <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
            <LoginInput
              type={passwordType}
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.changePassword}
            />
          </LoginWebsiteFormSub>
          <LoginWebsiteFormSubCheckbox>
            <LoginInputCheckbox
              type="checkbox"
              id="checkbox"
              onClick={this.toggleShowPassword}
            />
            <LoginLabelCheckbox htmlFor="checkbox" style={{cursor: 'pointer'}}>
              Show Password
            </LoginLabelCheckbox>
          </LoginWebsiteFormSubCheckbox>
          <LoginButton type="submit" style={{cursor: 'pointer'}}>
            Login
          </LoginButton>
          {showErrorMsg && <LoginErrorMsg>*{errorMsg}</LoginErrorMsg>}
        </LoginForm>
      </LoginBg>
    )
  }
}

export default Login

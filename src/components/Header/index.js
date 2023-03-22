import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BiListPlus} from 'react-icons/bi'
import {FaBars, FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import AppContext from '../../context/AppContext'
import {
  HeaderBg,
  HeaderLogo,
  HeaderDesktopContainer,
  HeaderMobileContainer,
  HeaderProfile,
  HeaderButton,
  LogoutPopupBg,
  LogoutPopupCard,
  LogoutPopupText,
  LogoutPopupButtonBg,
  LogoutPopupCloseButton,
  LogoutPopupConfirmButton,
  HeaderButtonMobile,
  MobileMenuPopupBg,
  MenuPopupButtonBg,
  MenuPopupCloseButton,
  MenuPopupMain,
  MenuPopupSub,
  MenuPopupText,
} from './StyledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value

        const onClickChangeTheme = () => {
          changeTheme()
        }

        return (
          <HeaderBg isDarkTheme={isDarkTheme}>
            <Link to="/">
              {isDarkTheme ? (
                <HeaderLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                  style={{cursor: 'pointer'}}
                />
              ) : (
                <HeaderLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                  style={{cursor: 'pointer'}}
                />
              )}
            </Link>

            <HeaderDesktopContainer>
              <HeaderButtonMobile
                type="button"
                onClick={onClickChangeTheme}
                data-testid="theme"
              >
                {isDarkTheme ? (
                  <FiSun
                    fontSize={24}
                    color="#ffffff"
                    style={{cursor: 'pointer'}}
                  />
                ) : (
                  <FaMoon fontSize={24} style={{cursor: 'pointer'}} />
                )}
              </HeaderButtonMobile>
              <HeaderProfile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                style={{cursor: 'pointer'}}
              />

              <Popup
                modal
                trigger={
                  <HeaderButton
                    type="button"
                    style={{cursor: 'pointer'}}
                    onClick={onClickLogout}
                  >
                    Logout
                  </HeaderButton>
                }
              >
                {close => (
                  <LogoutPopupBg>
                    <LogoutPopupCard>
                      <LogoutPopupText>
                        Are you sure, you want to logout
                      </LogoutPopupText>
                      <LogoutPopupButtonBg>
                        <LogoutPopupCloseButton
                          type="button"
                          onClick={() => close()}
                          style={{cursor: 'pointer'}}
                        >
                          Cancel
                        </LogoutPopupCloseButton>
                        <LogoutPopupConfirmButton
                          type="button"
                          onClick={onClickLogout}
                          style={{cursor: 'pointer'}}
                        >
                          Confirm
                        </LogoutPopupConfirmButton>
                      </LogoutPopupButtonBg>
                    </LogoutPopupCard>
                  </LogoutPopupBg>
                )}
              </Popup>
            </HeaderDesktopContainer>
            <HeaderMobileContainer>
              <HeaderButtonMobile
                type="button"
                onClick={onClickChangeTheme}
                data-testid="theme"
              >
                {isDarkTheme ? (
                  <FiSun
                    fontSize={24}
                    color="#ffffff"
                    style={{cursor: 'pointer'}}
                  />
                ) : (
                  <FaMoon fontSize={24} style={{cursor: 'pointer'}} />
                )}
              </HeaderButtonMobile>

              <Popup
                modal
                trigger={
                  <HeaderButtonMobile type="button">
                    {isDarkTheme ? (
                      <FaBars fontSize={24} color="#ffffff" />
                    ) : (
                      <FaBars fontSize={24} />
                    )}
                  </HeaderButtonMobile>
                }
              >
                {close => (
                  <MobileMenuPopupBg>
                    <MenuPopupButtonBg>
                      <MenuPopupCloseButton
                        type="button"
                        onClick={() => close()}
                      >
                        <GrClose fontSize={24} />
                      </MenuPopupCloseButton>
                    </MenuPopupButtonBg>
                    <MenuPopupMain>
                      <MenuPopupSub>
                        <AiFillHome fontSize={24} />
                        <Link to="/">
                          <MenuPopupText style={{cursor: 'pointer'}}>
                            Home
                          </MenuPopupText>
                        </Link>
                      </MenuPopupSub>
                      <MenuPopupSub>
                        <HiFire fontSize={24} />
                        <Link to="/trending">
                          <MenuPopupText style={{cursor: 'pointer'}}>
                            Trending
                          </MenuPopupText>
                        </Link>
                      </MenuPopupSub>
                      <MenuPopupSub>
                        <IoLogoGameControllerB fontSize={24} />
                        <Link to="/gaming">
                          <MenuPopupText style={{cursor: 'pointer'}}>
                            Gaming
                          </MenuPopupText>
                        </Link>
                      </MenuPopupSub>
                      <MenuPopupSub>
                        <BiListPlus fontSize={24} />
                        <Link to="/saved-videos">
                          <MenuPopupText style={{cursor: 'pointer'}}>
                            Saved Videos
                          </MenuPopupText>
                        </Link>
                      </MenuPopupSub>
                    </MenuPopupMain>
                  </MobileMenuPopupBg>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <HeaderButtonMobile type="button" onClick={onClickLogout}>
                    {isDarkTheme ? (
                      <FiLogOut
                        fontSize={24}
                        style={{cursor: 'pointer'}}
                        color="#ffffff"
                      />
                    ) : (
                      <FiLogOut fontSize={24} style={{cursor: 'pointer'}} />
                    )}
                  </HeaderButtonMobile>
                }
              >
                {close => (
                  <LogoutPopupBg>
                    <LogoutPopupCard>
                      <LogoutPopupText>
                        Are you sure you want to logout?
                      </LogoutPopupText>
                      <LogoutPopupButtonBg>
                        <LogoutPopupCloseButton
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </LogoutPopupCloseButton>
                        <LogoutPopupConfirmButton
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </LogoutPopupConfirmButton>
                      </LogoutPopupButtonBg>
                    </LogoutPopupCard>
                  </LogoutPopupBg>
                )}
              </Popup>
            </HeaderMobileContainer>
          </HeaderBg>
        )
      }}
    </AppContext.Consumer>
  )
}
export default withRouter(Header)

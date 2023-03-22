import {Link} from 'react-router-dom'
import {AiFillHome, AiFillYoutube} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BiListPlus} from 'react-icons/bi'
import {
  ControlPanelBg,
  ControlPanelMain,
  ControlPanelSub,
  ControlPanelText,
  ControlPanelInfo,
  ControlPanelInfoMainText,
  ControlPanelLogos,
  ControlPanelLogo,
  ControlPanelSubText,
} from './StyledComponents'
import AppContext from '../../context/AppContext'

const DesktopControlPanel = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const onClickYouTube = () => {
        window.location.href = 'https://www.youtube.com/@niharrdg'
      }
      const onClickTwitter = () => {
        window.location.href = 'https://twitter.com/nihar_d3'
      }
      const onClickLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/niharrdg/'
      }
      return (
        <ControlPanelBg isDarkTheme={isDarkTheme}>
          <ControlPanelMain>
            <ControlPanelSub>
              {isDarkTheme ? (
                <AiFillHome fontSize={24} color="#ffffff" />
              ) : (
                <AiFillHome fontSize={24} />
              )}
              <Link
                to="/"
                style={{textDecoration: 'none'}}
                className="nav-link"
              >
                <ControlPanelText isDarkTheme={isDarkTheme}>
                  Home
                </ControlPanelText>
              </Link>
            </ControlPanelSub>
            <ControlPanelSub>
              {isDarkTheme ? (
                <HiFire fontSize={24} color="#ffffff" />
              ) : (
                <HiFire fontSize={24} />
              )}
              <Link
                to="/trending"
                className="nav-link"
                style={{textDecoration: 'none'}}
              >
                <ControlPanelText isDarkTheme={isDarkTheme}>
                  Trending
                </ControlPanelText>
              </Link>
            </ControlPanelSub>
            <ControlPanelSub>
              {isDarkTheme ? (
                <IoLogoGameControllerB fontSize={24} color="#ffffff" />
              ) : (
                <IoLogoGameControllerB fontSize={24} />
              )}
              <Link
                to="/gaming"
                className="nav-link"
                style={{textDecoration: 'none'}}
              >
                <ControlPanelText isDarkTheme={isDarkTheme}>
                  Gaming
                </ControlPanelText>
              </Link>
            </ControlPanelSub>
            <ControlPanelSub>
              {isDarkTheme ? (
                <BiListPlus fontSize={24} color="#ffffff" />
              ) : (
                <BiListPlus fontSize={24} />
              )}
              <Link
                to="/saved-videos"
                className="nav-link"
                style={{textDecoration: 'none'}}
              >
                <ControlPanelText isDarkTheme={isDarkTheme}>
                  Saved Videos
                </ControlPanelText>
              </Link>
            </ControlPanelSub>
          </ControlPanelMain>
          <ControlPanelInfo>
            <ControlPanelInfoMainText>CONTACT US</ControlPanelInfoMainText>
            <ControlPanelLogos>
              <AiFillYoutube
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                style={{cursor: 'pointer', paddingRight: '15px'}}
                onClick={onClickYouTube}
                fontSize={65}
                color="red"
              />
              <ControlPanelLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                style={{cursor: 'pointer'}}
                onClick={onClickTwitter}
              />
              <ControlPanelLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                style={{cursor: 'pointer'}}
                onClick={onClickLinkedIn}
              />
            </ControlPanelLogos>
            <ControlPanelSubText>Developed by Nihar</ControlPanelSubText>
          </ControlPanelInfo>
        </ControlPanelBg>
      )
    }}
  </AppContext.Consumer>
)

export default DesktopControlPanel

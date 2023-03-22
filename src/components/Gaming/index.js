import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoLogoGameControllerB} from 'react-icons/io'
import Header from '../Header'
import AppContext from '../../context/AppContext'
import DesktopControlPanel from '../DesktopControlPanel'
import GamingCard from '../GamingCard'
import {
  GamingBg,
  GamingRightBg,
  GamingRightTopInfoBg,
  GamingInfoText,
  GamingMainIconBg,
  GamingUl,
  GamingFailureBg,
  GamingFailureImg,
  GamingFailureMainText,
  GamingFailureText,
  GamingFailureButton,
  LoaderContainer,
} from './StyledComponents'

class Gaming extends Component {
  state = {gamingVideosList: [], status: 'INITIAL'}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const {videos} = jsonData

      const formattedVideos = videos.map(eachElement => ({
        id: eachElement.id,
        thumbnailUrl: eachElement.thumbnail_url,
        title: eachElement.title,
        viewCount: eachElement.view_count,
      }))
      this.setState({gamingVideosList: formattedVideos, status: 'SUCCESS'})
    } else {
      this.setState({status: 'FAILURE'})
    }
  }

  retry = () => {
    this.setState({status: 'INITIAL'}, this.getGamingVideos)
  }

  onSuccessRetrievingVideos = () => {
    const {gamingVideosList} = this.state
    return (
      <GamingUl>
        {gamingVideosList.map(eachElement => (
          <GamingCard key={eachElement.id} gamingCardDetails={eachElement} />
        ))}
      </GamingUl>
    )
  }

  renderGamingVideos = () => {
    const {status} = this.state
    switch (status) {
      case 'INITIAL':
        return (
          <LoaderContainer data-testid="loader">
            <Loader type="ThreeDots" color="#000000" height="50" width="50" />
          </LoaderContainer>
        )
      case 'SUCCESS':
        return this.onSuccessRetrievingVideos()
      case 'FAILURE':
        return (
          <GamingFailureBg>
            <GamingFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <GamingFailureMainText>
              Oops! Something went Wrong
            </GamingFailureMainText>
            <GamingFailureText>
              We are having some trouble to complete your request. Please try
              again.
            </GamingFailureText>
            <GamingFailureButton type="button" onClick={this.retry}>
              Retry
            </GamingFailureButton>
          </GamingFailureBg>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <GamingBg>
                <DesktopControlPanel />
                <GamingRightBg data-testid="gaming" isDarkTheme={isDarkTheme}>
                  <GamingRightTopInfoBg>
                    <GamingMainIconBg>
                      <IoLogoGameControllerB fontSize={30} color="#ff0000" />
                    </GamingMainIconBg>

                    <GamingInfoText>Gaming</GamingInfoText>
                  </GamingRightTopInfoBg>
                  {this.renderGamingVideos()}
                </GamingRightBg>
              </GamingBg>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming

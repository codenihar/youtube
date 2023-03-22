import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import DesktopControlPanel from '../DesktopControlPanel'
import AppContext from '../../context/AppContext'
import VideoCard from '../VideoCard'
import {
  TrendingMainContainer,
  TrendingRightContainer,
  TrendingVideosUl,
  TrendingFailureBg,
  TrendingFailureImg,
  TrendingFailureMainText,
  TrendingFailureText,
  TrendingFailureButton,
  LoaderContainer,
  TrendingRightTopInfoBg,
  TrendingInfoText,
  TrendingMainIconBg,
} from './StyledComponents'

class Trending extends Component {
  state = {trendingVideosList: [], status: 'INITIAL'}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const jsonData = await response.json()
      const {videos} = jsonData

      const formattedVideos = videos.map(eachElement => ({
        name: eachElement.channel.name,
        channelProfileImageUrl: eachElement.channel.profile_image_url,
        id: eachElement.id,
        publishedAt: eachElement.published_at,
        thumbnailUrl: eachElement.thumbnail_url,
        title: eachElement.title,
        viewCount: eachElement.view_count,
      }))

      this.setState({trendingVideosList: formattedVideos, status: 'SUCCESS'})
    } else {
      this.setState({status: 'FAILURE'})
    }
  }

  retry = () => {
    this.setState({status: 'INITIAL'}, this.getTrendingVideos)
  }

  onSuccessRetrievingVideos = () => {
    const {trendingVideosList} = this.state

    return (
      <TrendingVideosUl>
        {trendingVideosList.map(eachElement => (
          <VideoCard key={eachElement.id} videoCardDetails={eachElement} />
        ))}
      </TrendingVideosUl>
    )
  }

  renderTrendingVideos = () => {
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
          <TrendingFailureBg>
            <TrendingFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <TrendingFailureMainText>
              Oops! Something went Wrong
            </TrendingFailureMainText>
            <TrendingFailureText>
              We are having some trouble to complete your request. Please try
              again.
            </TrendingFailureText>
            <TrendingFailureButton type="button" onClick={this.retry}>
              Retry
            </TrendingFailureButton>
          </TrendingFailureBg>
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
              <TrendingMainContainer>
                <DesktopControlPanel />
                <TrendingRightContainer
                  data-testid="trending"
                  isDarkTheme={isDarkTheme}
                >
                  <TrendingRightTopInfoBg>
                    <TrendingMainIconBg>
                      <HiFire fontSize={30} color="#ff0000" />
                    </TrendingMainIconBg>

                    <TrendingInfoText>Trending</TrendingInfoText>
                  </TrendingRightTopInfoBg>
                  {this.renderTrendingVideos()}
                </TrendingRightContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending

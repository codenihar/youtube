import {Component} from 'react'
import {GrClose} from 'react-icons/gr'
import {FiSearch} from 'react-icons/fi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import DesktopControlPanel from '../DesktopControlPanel'
import AppContext from '../../context/AppContext'
import VideoCard from '../VideoCard'
import {
  HomeMainContainer,
  HomeRightContainer,
  HomeVideosUl,
  HomeAdBg,
  HomeAdClose,
  HomeAdContent,
  HomeAdLogo,
  HomeAdText,
  HomeAdButton,
  HomeSearchBg,
  HomeSearchMain,
  HomeSearchInput,
  HomeSearchButton,
  HomeFailureBg,
  HomeFailureImg,
  HomeFailureMainText,
  HomeFailureText,
  HomeFailureButton,
  LoaderContainer,
} from './StyledComponents'

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    status: 'INITIAL',
    isAdClosed: false,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

      this.setState({videosList: formattedVideos, status: 'SUCCESS'})
    } else {
      this.setState({status: 'FAILURE'})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.setState({status: 'INITIAL'}, this.getHomeVideos)
  }

  closeAd = () => {
    this.setState({isAdClosed: true})
  }

  retry = () => {
    this.setState({status: 'INITIAL'}, this.getHomeVideos)
  }

  onSuccessRetrievingVideos = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return (
        <HomeFailureBg>
          <HomeFailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <HomeFailureMainText>No Search results found</HomeFailureMainText>
          <HomeFailureText>
            Try different key words or remove search filter
          </HomeFailureText>
          <HomeFailureButton type="button" onClick={this.retry}>
            Retry
          </HomeFailureButton>
        </HomeFailureBg>
      )
    }
    return (
      <HomeVideosUl>
        {videosList.map(eachElement => (
          <VideoCard key={eachElement.id} videoCardDetails={eachElement} />
        ))}
      </HomeVideosUl>
    )
  }

  renderVideos = () => {
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
          <HomeFailureBg>
            <HomeFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <HomeFailureMainText>
              Oops! Something went Wrong
            </HomeFailureMainText>
            <HomeFailureText>
              We are having some trouble to complete your request. Please try
              again.
            </HomeFailureText>
            <HomeFailureButton type="button" onClick={this.retry}>
              Retry
            </HomeFailureButton>
          </HomeFailureBg>
        )
      default:
        return null
    }
  }

  render() {
    const {searchInput, isAdClosed} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeMainContainer>
                <DesktopControlPanel />
                <HomeRightContainer
                  data-testid="home"
                  isDarkTheme={isDarkTheme}
                >
                  {!isAdClosed && (
                    <HomeAdBg data-testid="banner">
                      <HomeAdContent>
                        <HomeAdLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <HomeAdText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </HomeAdText>
                        <HomeAdButton type="button">GET IT NOW</HomeAdButton>
                      </HomeAdContent>
                      <HomeAdClose type="button" onClick={this.closeAd}>
                        <GrClose fontSize={24} data-testid="close" />
                      </HomeAdClose>
                    </HomeAdBg>
                  )}
                  <HomeSearchBg>
                    <HomeSearchMain>
                      <HomeSearchInput
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                      />
                      <HomeSearchButton
                        type="button"
                        onClick={this.onClickSearchButton}
                        data-testid="searchButton"
                      >
                        <FiSearch fontSize={20} />
                      </HomeSearchButton>
                    </HomeSearchMain>
                  </HomeSearchBg>
                  {this.renderVideos()}
                </HomeRightContainer>
              </HomeMainContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home

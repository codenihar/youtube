import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import Header from '../Header'
import AppContext from '../../context/AppContext'
import DesktopControlPanel from '../DesktopControlPanel'

import {
  VideoDetailsBg,
  VideoDetailsRightContainer,
  VideoDetailsVideoContainer,
  VideoDetailsDescription,
  VideoDetailsVideoInfoSub,
  VideoDetailsVideoInfoSubFeedback,
  VideoDetailsVideoInfoContainer,
  VideoDetailsVideoInfoMini,
  VideoDetailsChannelLogo,
  VideoDetailsChannelDetailsContainer,
  VideoDetailsChannelDetailsText,
  VideoDetailsViews,
  VideoDetailsPublishedAt,
  VideoDetailsVideoMiniText,
  HrLine,
  VideoDetailsChannelName,
  VideoDetailsSubscribersCount,
  VideoDetailsVideoDescription,
  VideoDetailsMain,
  LoaderContainer,
  VideoDetailsFailureBg,
  VideoDetailsFailureImg,
  VideoDetailsFailureMainText,
  VideoDetailsFailureText,
  VideoDetailsFailureButton,
} from './StyledComponents'

class VideoDetails extends Component {
  state = {videoDetails: {}, status: 'INITIAL'}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const token = Cookies.get('jwt_token')
    const options = {method: 'GET', headers: {Authorization: `Bearer ${token}`}}
    const response = await fetch(url, options)
    if (response.ok === true) {
      const jsonData = await response.json()

      const formattedJsonData = {
        channelName: jsonData.video_details.channel.name,
        channelProfileImageUrl:
          jsonData.video_details.channel.profile_image_url,
        channelSubscriberCount: jsonData.video_details.channel.subscriber_count,
        description: jsonData.video_details.description,
        id: jsonData.video_details.id,
        publishedAt: jsonData.video_details.published_at,
        thumbnailUrl: jsonData.video_details.thumbnail_url,
        title: jsonData.video_details.title,
        videoUrl: jsonData.video_details.video_url,
        viewCount: jsonData.video_details.view_count,
      }

      this.setState({videoDetails: formattedJsonData, status: 'SUCCESS'})
    } else {
      this.setState({status: 'FAILURE'})
    }
  }

  retry = () => {
    this.setState({status: 'INITIAL'}, this.getVideoDetails)
  }

  onSuccessRetrievingVideoDetails = () => {
    const {videoDetails} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {
            likedVideosList,
            unLikedVideosList,
            savedVideosList,
            toggleSavedVideo,
            toggleLikedVideos,
            toggleUnLikedVideos,
          } = value

          const IsInSavedVideos = savedVideosList.some(
            eachElement => eachElement.id === videoDetails.id,
          )

          const IsVideoLiked = likedVideosList.some(
            eachElement => eachElement === videoDetails.id,
          )

          const IsVideoUnLiked = unLikedVideosList.some(
            eachElement => eachElement === videoDetails.id,
          )

          const onClickSaveVideo = () => {
            toggleSavedVideo(videoDetails)
          }

          const onClickLikeButton = () => {
            toggleLikedVideos(videoDetails.id)
          }

          const onClickUnLikeButton = () => {
            toggleUnLikedVideos(videoDetails.id)
          }

          return (
            <>
              <VideoDetailsVideoContainer>
                <ReactPlayer
                  url={videoDetails.videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoDetailsVideoContainer>

              <VideoDetailsMain>
                <VideoDetailsDescription>
                  {videoDetails.title}
                </VideoDetailsDescription>
                <VideoDetailsVideoInfoContainer>
                  <VideoDetailsVideoInfoSub>
                    <VideoDetailsViews>
                      {videoDetails.viewCount} views
                    </VideoDetailsViews>
                    <BsDot fontSize={20} color="#424242" />
                    <VideoDetailsPublishedAt>
                      {videoDetails.publishedAt}
                    </VideoDetailsPublishedAt>
                  </VideoDetailsVideoInfoSub>
                  <VideoDetailsVideoInfoSubFeedback>
                    <VideoDetailsVideoInfoMini
                      type="button"
                      style={{cursor: 'pointer'}}
                      onClick={onClickLikeButton}
                    >
                      {IsVideoLiked ? (
                        <BiLike fontSize={20} color="#2563eb" />
                      ) : (
                        <BiLike fontSize={20} color="#64748b" />
                      )}
                      {IsVideoLiked ? (
                        <VideoDetailsVideoMiniText color="#2563eb">
                          Like
                        </VideoDetailsVideoMiniText>
                      ) : (
                        <VideoDetailsVideoMiniText color="#64748b">
                          Like
                        </VideoDetailsVideoMiniText>
                      )}
                    </VideoDetailsVideoInfoMini>
                    <VideoDetailsVideoInfoMini
                      type="button"
                      onClick={onClickUnLikeButton}
                      style={{cursor: 'pointer'}}
                    >
                      {IsVideoUnLiked ? (
                        <BiDislike fontSize={20} color="#2563eb" />
                      ) : (
                        <BiDislike fontSize={20} color="#64748b" />
                      )}
                      {IsVideoUnLiked ? (
                        <VideoDetailsVideoMiniText color="#2563eb">
                          Dislike
                        </VideoDetailsVideoMiniText>
                      ) : (
                        <VideoDetailsVideoMiniText color="#64748b">
                          Dislike
                        </VideoDetailsVideoMiniText>
                      )}
                    </VideoDetailsVideoInfoMini>
                    <VideoDetailsVideoInfoMini
                      onClick={onClickSaveVideo}
                      type="button"
                      style={{cursor: 'pointer'}}
                    >
                      {IsInSavedVideos ? (
                        <BiListPlus fontSize={20} color="#2563eb" />
                      ) : (
                        <BiListPlus fontSize={20} color="#64748b" />
                      )}
                      {IsInSavedVideos ? (
                        <VideoDetailsVideoMiniText color="#2563eb">
                          Saved
                        </VideoDetailsVideoMiniText>
                      ) : (
                        <VideoDetailsVideoMiniText color="#64748b">
                          Save
                        </VideoDetailsVideoMiniText>
                      )}
                    </VideoDetailsVideoInfoMini>
                  </VideoDetailsVideoInfoSubFeedback>
                </VideoDetailsVideoInfoContainer>
                <HrLine />
                <VideoDetailsChannelDetailsContainer>
                  <VideoDetailsChannelLogo
                    src={videoDetails.channelProfileImageUrl}
                    alt="channel logo"
                  />
                  <VideoDetailsChannelDetailsText>
                    <VideoDetailsChannelName>
                      {videoDetails.channelName}
                    </VideoDetailsChannelName>
                    <VideoDetailsSubscribersCount>
                      {videoDetails.channelSubscriberCount} subscribers
                    </VideoDetailsSubscribersCount>
                    <VideoDetailsVideoDescription>
                      {videoDetails.description}
                    </VideoDetailsVideoDescription>
                  </VideoDetailsChannelDetailsText>
                </VideoDetailsChannelDetailsContainer>
              </VideoDetailsMain>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }

  renderVideoDetails = () => {
    const {status} = this.state
    switch (status) {
      case 'INITIAL':
        return (
          <LoaderContainer data-testid="loader">
            <Loader type="ThreeDots" color="#000000" height="50" width="50" />
          </LoaderContainer>
        )
      case 'SUCCESS':
        return this.onSuccessRetrievingVideoDetails()
      case 'FAILURE':
        return (
          <VideoDetailsFailureBg>
            <VideoDetailsFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <VideoDetailsFailureMainText>
              Oops! Something went Wrong
            </VideoDetailsFailureMainText>
            <VideoDetailsFailureText>
              We are having some trouble to complete your request. Please try
              again.
            </VideoDetailsFailureText>
            <VideoDetailsFailureButton type="button" onClick={this.retry}>
              Retry
            </VideoDetailsFailureButton>
          </VideoDetailsFailureBg>
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
              <VideoDetailsBg>
                <DesktopControlPanel />
                <VideoDetailsRightContainer
                  data-testid="videoItemDetails"
                  isDarkTheme={isDarkTheme}
                >
                  {this.renderVideoDetails()}
                </VideoDetailsRightContainer>
              </VideoDetailsBg>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoDetails

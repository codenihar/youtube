import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import AppContext from '../../context/AppContext'
import {
  VideoCardLi,
  VideoCardThumbnail,
  VideoCardInfoMain,
  VideoCardChannelLogo,
  VideoCardInfoSub,
  VideoCardTitle,
  VideoCardChannelName,
  VideoCardMini,
  VideoCardViews,
  VideoCardPublished,
  VideoCardMiniDesktop,
  VideoCardMiniMobile,
} from './StyledComponents'

const VideoCard = props => {
  const {videoCardDetails} = props
  const {
    name,
    channelProfileImageUrl,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoCardDetails

  const daysFromNow = formatDistanceToNow(new Date(publishedAt))
  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoCardLi>
            <Link
              to={`/videos/${id}`}
              style={{textDecoration: 'none'}}
              className="nav-link"
            >
              <VideoCardThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardInfoMain>
                <VideoCardChannelLogo
                  src={channelProfileImageUrl}
                  alt="channel logo"
                />
                <VideoCardInfoSub>
                  <VideoCardTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </VideoCardTitle>
                  <VideoCardMiniDesktop>
                    <VideoCardChannelName>{name}</VideoCardChannelName>
                    <VideoCardMini>
                      <VideoCardViews>{viewCount} views</VideoCardViews>
                      <BsDot fontSize={20} />
                      <VideoCardPublished>{daysFromNow}</VideoCardPublished>
                    </VideoCardMini>
                  </VideoCardMiniDesktop>
                  <VideoCardMiniMobile>
                    <VideoCardChannelName>{name}</VideoCardChannelName>
                    <BsDot fontSize={20} />
                    <VideoCardViews>{viewCount} views</VideoCardViews>
                    <BsDot fontSize={20} />
                    <VideoCardPublished>{daysFromNow}</VideoCardPublished>
                  </VideoCardMiniMobile>
                </VideoCardInfoSub>
              </VideoCardInfoMain>
            </Link>
          </VideoCardLi>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoCard

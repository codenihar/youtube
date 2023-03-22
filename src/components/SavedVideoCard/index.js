import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {
  SavedVideoCardLi,
  SavedVideoCardThumbnail,
  SavedVideoCardInfoMain,
  SavedVideoCardInfoSub,
  SavedVideoCardTitle,
  SavedVideoCardChannelName,
  SavedVideoCardMini,
  SavedVideoCardViews,
  SavedVideosCardPublished,
  SavedVideoCardMiniDesktop,
  SavedVideoCardMiniMobile,
} from './StyledComponents'

const SavedVideoCard = props => {
  const {videoCardDetails} = props
  const {
    channelName,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoCardDetails

  const daysFromNow = formatDistanceToNow(new Date(publishedAt))
  return (
    <Link to={`/videos/${id}`} className="saved-nav-link">
      <SavedVideoCardLi>
        <SavedVideoCardThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <SavedVideoCardInfoMain>
          <SavedVideoCardInfoSub>
            <SavedVideoCardTitle>{title}</SavedVideoCardTitle>
            <SavedVideoCardMiniDesktop>
              <SavedVideoCardChannelName>
                {channelName}
              </SavedVideoCardChannelName>
              <SavedVideoCardMini>
                <SavedVideoCardViews>{viewCount} views</SavedVideoCardViews>
                <BsDot fontSize={20} />
                <SavedVideosCardPublished>
                  {daysFromNow}
                </SavedVideosCardPublished>
              </SavedVideoCardMini>
            </SavedVideoCardMiniDesktop>
            <SavedVideoCardMiniMobile>
              <SavedVideoCardChannelName>
                {channelName}
              </SavedVideoCardChannelName>
              <BsDot fontSize={20} />
              <SavedVideoCardViews>{viewCount} views</SavedVideoCardViews>
              <BsDot fontSize={20} />
              <SavedVideosCardPublished>{daysFromNow}</SavedVideosCardPublished>
            </SavedVideoCardMiniMobile>
          </SavedVideoCardInfoSub>
        </SavedVideoCardInfoMain>
      </SavedVideoCardLi>
    </Link>
  )
}

export default SavedVideoCard

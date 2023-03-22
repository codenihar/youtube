import {Link} from 'react-router-dom'
import {
  GamingCardLi,
  GamingCardThumbnail,
  GamingCardTitle,
  GamingCardViewCount,
} from './StyledComponents'

const GamingCard = props => {
  const {gamingCardDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gamingCardDetails

  return (
    <GamingCardLi>
      <Link to={`/videos/${id}`} className="nav-link">
        <GamingCardThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <GamingCardTitle>{title}</GamingCardTitle>
        <GamingCardViewCount>
          {viewCount} Watching Worldwide
        </GamingCardViewCount>
      </Link>
    </GamingCardLi>
  )
}

export default GamingCard

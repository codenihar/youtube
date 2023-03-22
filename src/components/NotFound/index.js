import Header from '../Header'
import DesktopControlPanel from '../DesktopControlPanel'
import {
  NotFoundMainContainer,
  NotFoundRightContainer,
  NotFoundImage,
  NotFoundMainText,
  NotFoundText,
} from './StyledComponents'

const NotFound = () => (
  <>
    <Header />
    <NotFoundMainContainer>
      <DesktopControlPanel />
      <NotFoundRightContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
          className="not-found-image"
        />
        <NotFoundMainText>Page Not Found</NotFoundMainText>
        <NotFoundText>
          We are sorry, the page you requested could not be found.
        </NotFoundText>
      </NotFoundRightContainer>
    </NotFoundMainContainer>
  </>
)

export default NotFound

import {BiListPlus} from 'react-icons/bi'
import AppContext from '../../context/AppContext'
import SavedVideoCard from '../SavedVideoCard'
import Header from '../Header'
import DesktopControlPanel from '../DesktopControlPanel'
import {
  SavedVideosUl,
  SavedVideosMainContainer,
  SavedVideosRightContainer,
  SavedVideosMainIconBg,
  SavedVideosRightTopInfoBg,
  SavedVideosInfoText,
  SavedVideosNoBg,
  SavedVideosNoImg,
  SavedVideosNoMainText,
  SavedVideosNoText,
} from './StyledComponents'

const SavedVideos = () => (
  <AppContext.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme} = value
      return (
        <>
          <Header />
          <SavedVideosMainContainer>
            <DesktopControlPanel />
            <SavedVideosRightContainer
              data-testid="savedVideos"
              isDarkTheme={isDarkTheme}
            >
              <SavedVideosRightTopInfoBg>
                <SavedVideosMainIconBg>
                  <BiListPlus fontSize={30} color="#ff0000" />
                </SavedVideosMainIconBg>
                <SavedVideosInfoText>Saved Videos</SavedVideosInfoText>
              </SavedVideosRightTopInfoBg>
              {savedVideosList.length === 0 ? (
                <SavedVideosNoBg>
                  <SavedVideosNoImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <SavedVideosNoMainText>
                    No saved videos found
                  </SavedVideosNoMainText>
                  <SavedVideosNoText>
                    You can save your videos while watching them
                  </SavedVideosNoText>
                </SavedVideosNoBg>
              ) : (
                <SavedVideosUl>
                  {savedVideosList.map(eachElement => (
                    <SavedVideoCard
                      key={eachElement.id}
                      videoCardDetails={eachElement}
                    />
                  ))}
                </SavedVideosUl>
              )}
            </SavedVideosRightContainer>
          </SavedVideosMainContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideos

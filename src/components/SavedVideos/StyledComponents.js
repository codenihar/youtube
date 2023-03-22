import styled from 'styled-components'

export const SavedVideosUl = styled.ul`
  padding: 0;
  list-style-type: none;
  width: 90%;
  margin: auto;
`

export const SavedVideosMainContainer = styled.div`
  display: flex;
  min-height: 88vh;
  max-width: 100vw;
`

export const SavedVideosRightContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
`

export const SavedVideosMainIconBg = styled.div`
  background-color: #d7dfe9;
  border-radius: 25px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SavedVideosRightTopInfoBg = styled.div`
  display: flex;
  align-items: center;
  background-color: #cccccc;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const SavedVideosInfoText = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  color: #000000;
  font-size: 24px;
  margin-left: 20px;
`

export const SavedVideosNoBg = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SavedVideosNoImg = styled.img`
  width: 90%;
  max-width: 500px;
`

export const SavedVideosNoMainText = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  color: #000000;
  font-size: 24px;
`

export const SavedVideosNoText = styled.p`
  font-family: Roboto;
  font-weight: 500;
  color: #475569;
  font-size: 16px;
`

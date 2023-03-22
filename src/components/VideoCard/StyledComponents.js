import styled from 'styled-components'

export const VideoCardLi = styled.li`
  max-width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  @media (min-width: 768px) {
    max-width: 45%;
    margin-bottom: 20px;
  }

  @media (min-width: 992px) {
    max-width: 30%;
    margin-bottom: 20px;
  }
`

export const VideoCardThumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

export const VideoCardInfoMain = styled.div`
  display: flex;
`

export const VideoCardChannelLogo = styled.img`
  height: 40px;
`

export const VideoCardInfoSub = styled.div`
  margin-left: 10px;
`
export const VideoCardTitle = styled.p`
  margin: 0;
  font-family: Roboto;
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const VideoCardChannelName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #606060;
  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 14px;
    margin: 0;
    margin-top: 10px;
    color: #606060;
  }
`

export const VideoCardMini = styled.div`
  display: flex;
  align-items: center;
`
export const VideoCardViews = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #606060;
`
export const VideoCardPublished = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #606060;
`
export const VideoCardMiniDesktop = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`

export const VideoCardMiniMobile = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    display: none;
  }
`

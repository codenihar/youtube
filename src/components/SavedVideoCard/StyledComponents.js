import styled from 'styled-components'

export const SavedVideoCardLi = styled.li`
  max-width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
`

export const SavedVideoCardThumbnail = styled.img`
  width: 50%;
  margin-bottom: 10px;
  max-width: 400px;
`

export const SavedVideoCardInfoMain = styled.div`
  display: flex;
`

export const SavedVideoCardInfoSub = styled.div`
  margin-left: 10px;
`

export const SavedVideoCardTitle = styled.p`
  margin: 0;
  font-family: Roboto;
  font-size: 17px;
`

export const SavedVideoCardChannelName = styled.p`
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

export const SavedVideoCardMini = styled.div`
  display: flex;
  align-items: center;
`

export const SavedVideoCardViews = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #606060;
`

export const SavedVideosCardPublished = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #606060;
`

export const SavedVideoCardMiniDesktop = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`

export const SavedVideoCardMiniMobile = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    display: none;
  }
`

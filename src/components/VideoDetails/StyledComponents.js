import styled from 'styled-components'

export const VideoDetailsBg = styled.div`
  display: flex;
  max-width: 100vw;
`

export const VideoDetailsRightContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media (min-width: 576px) {
    padding: 30px;
    width: 100%;
  }
`

export const VideoDetailsVideoContainer = styled.div`
  width: 100%;
  height: 300px;

  @media (min-width: 576px) {
    width: 100%;
    height: 500px;
  }
`

export const VideoDetailsDescription = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  color: #0f0f0f;
  line-height: 28px;
`

export const VideoDetailsVideoInfoSub = styled.div`
  display: flex;
  align-items: center;
`

export const VideoDetailsVideoInfoSubFeedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
  }
`

export const VideoDetailsVideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const VideoDetailsVideoInfoMini = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
`

export const VideoDetailsChannelLogo = styled.img`
  height: 55px;
`
export const VideoDetailsChannelDetailsContainer = styled.div`
  display: flex;
`

export const VideoDetailsChannelDetailsText = styled.div`
  margin-left: 10px;
`

export const VideoDetailsViews = styled.p`
  margin: 0;
  font-family: Roboto;
  font-size: 14px;
  margin-left: 5px;
  color: #424242;
`
export const VideoDetailsPublishedAt = styled.p`
  margin: 0;
  font-family: Roboto;
  font-size: 14px;
  margin-left: 5px;
  color: #424242;
`

export const VideoDetailsVideoMiniText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  margin-left: 5px;
  color: ${props => props.color};
`

export const HrLine = styled.hr`
  border: solid 1px #d7dfe9;
  margin-top: 10px;
  margin-bottom: 25px;
`
export const VideoDetailsChannelName = styled.p`
  font-family: Roboto;
  color: #0f0f0f;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  margin-top: 10px;
`
export const VideoDetailsSubscribersCount = styled.p`
  font-family: Roboto;
  color: #424242;
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  margin-top: 10px;
`

export const VideoDetailsVideoDescription = styled.p`
  color: #64748b;
  font-family: Roboto;
  line-height: 25px;
  font-size: 15px;
`

export const VideoDetailsMain = styled.div`
  width: 90vw;
  margin: auto;
  @media (min-width: 576px) {
    width: 100%;
    margin: auto;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const VideoDetailsFailureBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const VideoDetailsFailureImg = styled.img`
  width: 70%;
  max-width: 500px;
`

export const VideoDetailsFailureMainText = styled.h1`
  font-family: Roboto;
  color: #1e293b;
  font-size: 18px;
  text-align: center;
`
export const VideoDetailsFailureText = styled.p`
  font-family: Roboto;
  color: #475569;
  font-size: 14px;
  text-align: center;
`
export const VideoDetailsFailureButton = styled.button`
  border: 0;
  border-radius: 5px;
  width: 80px;
  height: 35px;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
`

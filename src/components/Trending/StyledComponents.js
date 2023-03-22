import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
  min-height: 88vh;
  max-width: 100vw;
`

export const TrendingRightContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
`

export const TrendingVideosUl = styled.ul`
  list-style-type: none;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
  margin-top: 20px;
`

export const TrendingFailureBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const TrendingFailureImg = styled.img`
  width: 70%;
  max-width: 500px;
`

export const TrendingFailureMainText = styled.h1`
  font-family: Roboto;
  color: #1e293b;
  font-size: 18px;
  text-align: center;
`
export const TrendingFailureText = styled.p`
  font-family: Roboto;
  color: #475569;
  font-size: 14px;
  text-align: center;
`
export const TrendingFailureButton = styled.button`
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
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TrendingRightTopInfoBg = styled.div`
  display: flex;
  align-items: center;
  background-color: #cccccc;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const TrendingInfoText = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  color: #000000;
  font-size: 24px;
  margin-left: 20px;
`

export const TrendingMainIconBg = styled.div`
  background-color: #d7dfe9;
  border-radius: 25px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

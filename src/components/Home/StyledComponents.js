import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  min-height: 88vh;
  max-width: 100vw;
`

export const HomeRightContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  flex-grow: 1;
`

export const HomeVideosUl = styled.ul`
  list-style-type: none;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  @media (min-width: 576px) {
    list-style-type: none;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 95%;
    margin: auto;
    margin-top: 20px;
  }
`

export const HomeAdBg = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  min-height: 240px;
  padding: 40px;
`

export const HomeAdClose = styled.button`
  background-color: transparent;
  border: 0;
  align-self: flex-start;
`

export const HomeAdContent = styled.div`
  max-width: 80%;
  @media (min-width: 768px) {
    max-width: 40%;
  }
`

export const HomeAdLogo = styled.img`
  width: 150px;
`

export const HomeAdText = styled.p`
  font-family: Roboto;
  font-weight: 500;
  color: #000000;
  font-size: 20px;
  line-height: 28px;
`

export const HomeAdButton = styled.button`
  border: solid 1px #000000;
  width: 150px;
  height: 45px;
  color: #000000;
  font-family: Roboto;
  font-size: 18px;
`

export const HomeSearchBg = styled.div`
  width: 90%;
  margin: auto;
`

export const HomeSearchMain = styled.div`
  border: solid 1px #94a3b8;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const HomeSearchInput = styled.input`
  height: 35px;
  padding: 10px;
  background-color: transparent;
  border: 0;
  flex-grow: 1;
`

export const HomeSearchButton = styled.button`
  background-color: transparent;
  border: 0;
  border-left: solid 1px #94a3b8;
  background-color: #ebebeb;
  width: 50px;
`
export const HomeFailureBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const HomeFailureImg = styled.img`
  width: 70%;
  max-width: 500px;
`

export const HomeFailureMainText = styled.h1`
  font-family: Roboto;
  color: #1e293b;
  font-size: 18px;
  text-align: center;
`

export const HomeFailureText = styled.p`
  font-family: Roboto;
  color: #475569;
  font-size: 14px;
  text-align: center;
`

export const HomeFailureButton = styled.button`
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

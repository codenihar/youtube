import styled from 'styled-components'

export const ControlPanelBg = styled.div`
  display: none;
  @media (min-width: 768px) {
    background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 88vh;
    min-width: 200px;
    max-width: 30vw;
  }
  @media (min-width: 992px) {
    min-width: 240px;
    max-width: 240px;
  }
`

export const ControlPanelMain = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;
`

export const ControlPanelSub = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
`

export const ControlPanelText = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-left: 24px;
`

export const ControlPanelInfo = styled.div`
  width: 90%;
  align-self: flex-end;
`

export const ControlPanelInfoMainText = styled.p`
  color: #1e293b;
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
`

export const ControlPanelLogos = styled.div`
  display: flex;
  align-items: center;
`

export const ControlPanelLogo = styled.img`
  height: 40px;
  margin-right: 18px;
`

export const ControlPanelSubText = styled.p`
  color: #1e293b;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
`

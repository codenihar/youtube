import styled from 'styled-components'

export const HeaderBg = styled.nav`
  background-color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#ffffff'};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const HeaderLogo = styled.img`
  max-width: 140px;
`

export const HeaderDesktopContainer = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 25%;
    max-width: 200px;
    padding: 0;
    list-style-type: none;
  }
`

export const HeaderMobileContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  padding: 0;
  list-style-type: none;
  @media (min-width: 768px) {
    display: none;
  }
`

export const HeaderProfile = styled.img`
  height: 30px;
`

export const HeaderButton = styled.button`
  color: #3b82f6;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  border: solid 1px #3b82f6;
  background-color: transparent;
  height: 30px;
  width: 90px;
  border-radius: 5px;
`

export const LogoutPopupBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: transparent;
`

export const LogoutPopupCard = styled.div`
  background-color: #ffffff;
  height: 200px;
  width: 90vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const LogoutPopupText = styled.p`
  font-family: Roboto;
  color: #00306e;
  font-weight: 500;
  font-size: 20px;
`

export const LogoutPopupButtonBg = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export const LogoutPopupCloseButton = styled.button`
  border: 0;
  height: 45px;
  width: 120px;
  border: solid 1px #cccccc;
  background-color: transparent;
  border-radius: 5px;
  margin-top: 10px;
  font-family: Roboto;
  font-size: 16px;
`

export const LogoutPopupConfirmButton = styled.button`
  border: 0;
  height: 45px;
  width: 120px;
  border: 0;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 10px;
`
export const HeaderButtonMobile = styled.button`
  border: 0;
  background-color: transparent;
`

export const MobileMenuPopupBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  min-height: 100vh;
  background-color: #ffffff;
  width: 100vw;
`

export const MenuPopupButtonBg = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`

export const MenuPopupCloseButton = styled.button`
  background-color: transparent;
  border: 0;
  margin-left: auto;
`
export const MenuPopupMain = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const MenuPopupSub = styled.div`
  display: flex;
  align-items: center;
`

export const MenuPopupText = styled.p`
  font-family: Roboto;
  font-weight: 500;
  color: #000000;
  font-size: 18px;
  margin-left: 20px;
`

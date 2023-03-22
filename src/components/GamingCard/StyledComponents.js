import styled from 'styled-components'

export const GamingCardLi = styled.li`
  width: 100%;
  margin-top: 40px;
  @media (min-width: 576px) {
    width: 45%;
  }
  @media (min-width: 768px) {
    width: 32%;
  }
`

export const GamingCardThumbnail = styled.img`
  width: 100%;
`

export const GamingCardTitle = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0;
`

export const GamingCardViewCount = styled.p`
  font-family: Roboto;
  font-size: 16px;
  margin-top: 5px;
`

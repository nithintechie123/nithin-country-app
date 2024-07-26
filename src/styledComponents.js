import styled from 'styled-components'

export const CountriesAppContainer = styled.div`
  background-color: #161624;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  position: center;
`

export const CountriesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: #f8fafc;
`
export const CountriesContainer = styled.ul`
  list-style-type: none;
  width: 90%;
  border: 1px solid #334155;
  border-radius: 4px;
  font-family: 'Roboto';
  padding: 0px;
  height: 350px;
  overflow-y: scroll;
`

export const EachCountryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #334155;
`

export const EachCountryName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
`

export const Button = styled.button`
  background-color: ${props => (props.visitStatus ? 'transparent' : '#3b82f6')};
  border-radius: 4px;
  border-width: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 10px;
  width: 90px;
  color: ${props => (props.visitStatus ? '#94a3b8' : '#ffffff')};
  cursor: pointer;
  outline: none;
`

export const VisitText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  margin: 0px;
`

export const VisitedCountriesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: #f8fafc;
`

export const VisitedCountriesContainer = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`

export const VisitedCountryItem = styled.li`
  background-color: #1f1f2f;
  margin: 5px;
`

export const ImageElement = styled.img`
  width: 300px;
`
export const VisitedCountryNameRemoveButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
`

export const VisitedCountryName = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
`

export const RemoveButton = styled.button`
  border: 1px solid #94a3b8;
  background-color: transparent;
  border-radius: 2px;
  width: 70px;
  padding: 5px;
  cursor: pointer;
  outline: none;
`

export const RemoveText = styled.p`
  color: #ffffff;
  margin: 0px;
`

export const NoCountryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const NoCountryText = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-family: 'Roboto';
`

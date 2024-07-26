import {
  EachCountryItem,
  EachCountryName,
  Button,
  VisitText,
} from '../../styledComponents'

const CountryItem = props => {
  const {eachCountryDetails, clickedVisitButton} = props
  const {id, name, isVisited} = eachCountryDetails

  const visitText = isVisited ? 'Visited' : 'Visit'

  const onClickVisitButton = () => {
    clickedVisitButton(id)
  }

  return (
    <EachCountryItem>
      <EachCountryName>{name}</EachCountryName>
      <Button
        type="button"
        onClick={onClickVisitButton}
        visitStatus={isVisited}
      >
        <VisitText>{visitText}</VisitText>
      </Button>
    </EachCountryItem>
  )
}

export default CountryItem

import {EachCountryItem, EachCountryName, Button} from '../../styledComponents'

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
        {visitText}
      </Button>
    </EachCountryItem>
  )
}

export default CountryItem

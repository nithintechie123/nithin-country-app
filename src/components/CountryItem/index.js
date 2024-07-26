import {
  EachCountryItem,
  EachCountryName,
  Button,
  VisitText,
} from '../../styledComponents'

const CountryItem = props => {
  const {eachCountryDetails, clickedVisitButton} = props
  const {id, name, isVisited} = eachCountryDetails

  const onClickVisitButton = () => {
    clickedVisitButton(id)
  }

  return (
    <EachCountryItem>
      <EachCountryName>{name}</EachCountryName>
      {isVisited ? (
        <VisitText onClick={onClickVisitButton}>Visited</VisitText>
      ) : (
        <Button
          type="button"
          onClick={onClickVisitButton}
          visitStatus={isVisited}
        >
          Visit
        </Button>
      )}
    </EachCountryItem>
  )
}

export default CountryItem

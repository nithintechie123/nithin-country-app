import {
  VisitedCountryItem,
  ImageElement,
  VisitedCountryNameRemoveButtonContainer,
  VisitedCountryName,
  RemoveButton,
} from '../../styledComponents'

const VisitedCountry = props => {
  const {visitedCountryDetails, clickedRemoveBtn} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickRemoveBtn = () => {
    clickedRemoveBtn(id)
  }

  return (
    <VisitedCountryItem>
      <ImageElement src={imageUrl} alt="thumbnail" />
      <VisitedCountryNameRemoveButtonContainer>
        <VisitedCountryName>{name}</VisitedCountryName>
        <RemoveButton type="button" onClick={onClickRemoveBtn}>
          Remove
        </RemoveButton>
      </VisitedCountryNameRemoveButtonContainer>
    </VisitedCountryItem>
  )
}

export default VisitedCountry

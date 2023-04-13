// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveImage} = props
  const {thumbnailUrl, id, thumbnailAltText} = imageDetails

  const thumbnailClassName = isActive ? 'thumbnail-active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveImage(id)
  }

  return (
    <li className="thumbnail-items">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

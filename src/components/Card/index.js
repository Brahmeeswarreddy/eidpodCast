import './index.css'

const Card = props => {
  const {eachItem, ondeleteBtn} = props
  const {id, imageUrl, name, genre, duration} = eachItem

  const onClickBtn = () => {
    ondeleteBtn(id)
  }

  return (
    <li className="container">
      <div className="first">
        <img src={imageUrl} alt="track" className="image" />
        <div className="text">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div>
        <p className="duration">{duration}</p>
        <button type="button" data-testid="delete" onClick={onClickBtn}>
          delete
        </button>
      </div>
    </li>
  )
}

export default Card

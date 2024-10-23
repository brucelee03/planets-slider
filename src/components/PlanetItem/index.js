import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-item">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h2 className="planet-name">{name}</h2>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem

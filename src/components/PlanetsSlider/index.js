import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {planetsList: props.planetsList}
  }

  render() {
    const {planetsList} = this.state
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    }
    return (
      <div className="planets-slider-container" data-testid="planets">
        <h1 className="heading">PLANETS</h1>
        <div className="planets-slider">
          <Slider {...settings}>
            {planetsList.map(eachPlanet => (
              <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default PlanetsSlider

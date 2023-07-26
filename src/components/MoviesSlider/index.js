// Write your code here
import {Component} from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

class MoviesSlider extends Component {
  render() {
    const {x} = this.props

    const settings = {
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 1,
    }
    return (
      <>
        <div className="side1">
          <Slider {...settings} className="card1">
            {x.map(i => (
              <MovieItem x={i} key={i.id} />
            ))}
          </Slider>
        </div>
      </>
    )
  }
}
export default MoviesSlider

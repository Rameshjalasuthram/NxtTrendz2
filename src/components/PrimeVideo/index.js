// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const a = moviesList.filter(i => i.categoryId === 'ACTION')
    const b = moviesList.filter(i => i.categoryId === 'COMEDY')

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="logo"
        />
        <div className="card">
          <h1>Action Movies</h1>
          <MoviesSlider x={a} />
        </div>
        <div className="card">
          <h1>Comedy Movies</h1>
          <MoviesSlider x={b} />
        </div>
      </div>
    )
  }
}
export default PrimeVideo

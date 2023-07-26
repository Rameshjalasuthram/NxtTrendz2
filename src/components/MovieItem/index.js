// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

import './index.css'

class MovieItem extends Component {
  render() {
    const {x} = this.props

    return (
      <>
        <div className="slider-container">
          <Popup
            modal
            trigger={
              <img src={x.thumbnailUrl} alt="thumbnail" className="pic" />
            }
            position="center center"
            className="popup-content"
          >
            {close => (
              <div className="ff">
                <div className="y">
                  <button
                    className="x"
                    type="button"
                    data-testid="closeButton"
                    onClick={() => close()}
                  >
                    <IoMdClose />
                  </button>
                </div>

                <div className="j">
                  <ReactPlayer url={x.videoUrl} />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </>
    )
  }
}
export default MovieItem

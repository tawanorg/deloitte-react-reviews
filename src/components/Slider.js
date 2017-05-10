import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default class Slider extends React.Component {

  static propTypes = {
    images: PropTypes.array.isRequired
  };
 
  render() {
    let { images } = this.props;

    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            { this._renderIndicator(images) }
          </ol>

          <div className="carousel-inner">
          { this._renderImages(images) }
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    );
  }
  
  _renderIndicator(images) {
    return images.map((image, index) => {
      return (<li key={index} 
        data-target="#myCarousel" 
        data-slide-to={index} 
        className={cx({'active': index === 0 })}></li>)
    })
  }

  _renderImages(images) {
    return images.map((image, index) => {
      return (
        <div key={index} className={cx({
          'item': true,
          'active': index === 0
        })}>
          <img src={image.src} alt={image.caption} className="img-responsive" />
        </div>
      )
    })
  }
}


 
import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0,
    };
    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick(event) {
    this.setState({
      active: +event.target.dataset.index, // + converts to number
    });
  }
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

import React from 'react';
import cn from 'classnames';
import { uniqueId } from 'lodash';


class CarouselItem extends React.Component {
  render() {
    const {src, alt, isActive} = this.props;
    const classes = cn('carousel-item',  {active: isActive})

    return (
      <div className={classes}>
        <img alt={alt} className="d-block w-100" src={src} style={{ maxHeight: '50vh', width: '100% !important' }} />
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    const { btnType, handler } = this.props;
    return (
      <button
        className={`carousel-control-${btnType}`}
        data-bs-target="#carousel"
        type="button"
        data-bs-slide={btnType}
        onClick={handler}
      >
        <span className={`carousel-control-${btnType}-icon`} aria-hidden="true"></span>
        <span className="visually-hidden">{ btnType === 'prev' ? 'Previous' : 'Next'}</span>
      </button>
    )
  }
}

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.images = props.images;
  }

  onClickNext = () => {
    this.setState((state) => {
      if (state.activeIndex === this.images.length - 1 ) {
        return {activeIndex: 0}
      } 
      return {activeIndex: state.activeIndex + 1}
    })
  }

  onClickPrev = () => {
    this.setState((state) => {
      if (state.activeIndex === 0 ) {
        return {activeIndex: this.images.length - 1}
      } 
      return {activeIndex: state.activeIndex - 1}
    })
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {this.images.map((pathToImage, i) => (
             <CarouselItem
              key={uniqueId('carousel_')}
              src={pathToImage}
              alt=""
              isActive={i === activeIndex}
            />
          ))}
        </div>
        <Button btnType='prev' handler={this.onClickPrev}/>
        <Button btnType='next' handler={this.onClickNext}/>
      </div>
    )
  }
}
import { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from './styles/index.style'
import React, { Component } from 'react';

export class PaginationSlider extends Component{
  render() {
    return (
      <Pagination
      dotsLength={this.props.fotos.length}
      activeDotIndex={this.props.state}
      containerStyle={styles.paginationContainer}
      dotColor={'rgb(12, 1, 160)'}
      dotStyle={styles.paginationDot}
      inactiveDotColor={colors.black}
      inactiveDotOpacity={0.6}
      inactiveDotScale={0.5}
      // carouselRef = {this.props._carousel}
      // tappableDots = {true}
      />
    );
  }
}

export default PaginationSlider
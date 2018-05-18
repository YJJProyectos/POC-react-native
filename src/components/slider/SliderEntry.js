import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './styles/SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.string.isRequired
    };

    get image () {
        const { data: item} = this.props;

        return (
            <Image
              source={{ uri: item }}
              style={styles.image}
            />
        );
    }

    render () {
        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`Click`); }}
              >
                {/* <View style={styles.shadow} /> */}
                {/* <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View> */}
                <View style={[styles.imageContainer]}>
                    { this.image }
                </View>
                {/* <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                    <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                      numberOfLines={2}
                    >
                        { subtitle }
                    </Text>
                </View> */}
            </TouchableOpacity>
        );
    }
}
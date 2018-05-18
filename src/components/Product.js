import React, { Component } from "react";
import { Text, View, TouchableOpacity, Linking, ActivityIndicator, Dimensions } from "react-native";
import { connect } from "react-redux";
import { getProduct } from "../actions/product/productActions";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './slider/SliderEntry';
import styles, { colors } from './slider/styles/index.style';
import PaginationSlider from './slider/PaginationSlider';

class Product extends Component {

    constructor (props) {
        super(props);
        this.state = {
            sliderActiveSlide: 1
        };
    }

    componentWillMount() {
        // TODO verificar como pasar id
        const id = 1;
        this.props.getProduct(id);

      }

      renderLoading() {
        console.log('item ' + this.props.item);
        console.log('item ' + JSON.stringify(this.props.item));
        console.log('loading ' + this.props.loading);
        console.log('error ' + this.props.error);
        return this.props.loading ? <ActivityIndicator style={{flex: 1}} size="large" color="#1ac925" /> : null
      }

      _renderItem ({item, index}) {
        return (
            <SliderEntry data={item} />
        );
    }
    // get pagination () {
    //     const { sliderActiveSlide } = this.state;
    //     console.log( "SLIDER " + sliderActiveSlide );
        
    //     return (
    //         <Pagination
    //             dotsLength={this.props.item.fotos.length}
    //             activeDotIndex={this.state.sliderActiveSlide}
    //             containerStyle={styles.paginationContainer}
    //             dotColor={'rgb(12, 1, 160)'}
    //             dotStyle={styles.paginationDot}
    //             inactiveDotColor={colors.black}
    //             inactiveDotOpacity={0.6}
    //             inactiveDotScale={0.5}
    //             carouselRef = {this._carousel}
    //             tappableDots = {true}
    //         />
    //     );
    // }


      renderProduct() {
        
        const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
        var sliderWidth = viewportWidth *0.75;
        var itemWidth = viewportWidth * 0.9;
        console.log("WIDTH " + viewportWidth );
        console.log("HEIGHT " + viewportHeight );
        

        return this.props.item ? (
        <View style={{flex: 1, 
        alignItems: 'center'}}>
            <View style={ {marginTop: 18, marginBottom: 5}} >
                <Text style={{ fontSize: 19, color: "blue" }}>{ this.props.item.descripcionLarga}</Text>
            </View>
            <View style={{flex: 1, 
            alignItems: 'center' }}>
                <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.props.item.fotos}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                layout = {'default'}
                // layoutCardOffset={9}
                loop = {true}
                activeSlideAlignment = {'start'}
                autoplay = {true}
                autoplayDelay = {3000}
                onSnapToItem={(index) => this.setState({ sliderActiveSlide: index }) }
                />
                {/* { this.pagination } */}
                <PaginationSlider _carousel={this._carousel} fotos={this.props.item.fotos} state={this.state.sliderActiveSlide} />
                <Text>Precio ${ this.props.item.precio }</Text> 
                <Text>Descripcion Corta { this.props.item.descripcionCorta}</Text>
                <Text>Stock { this.props.item.stock}</Text>
            </View>
            <View>
            </View>
        </View>
        ) : null

      }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* <Text>ID { this.props.item.id }</Text>
                <Text>Descripcion Corta { this.props.item.descripcionCorta}</Text>
                <Text>Descripcrion larga { this.props.item.descripcionLarga}</Text>
                <Text>Stock { this.props.item.stock}</Text> */}
                {this.renderLoading()}
                {this.renderProduct()}
                {/* {this.props.item
                .map((item, index) => (
                <TouchableOpacity onPress={() => {}} style={issuerButtonStyle} key={item.id}>
                    <Text style={issuerTextStyle}>{item.id}</Text>
                </TouchableOpacity>
                ))} */}
            </View>
        )
    }
}


const mapStateToProps = ( {product} ) => {
    const { product: item, error, loading } = product;
    console.log("Product: " + product);
    console.log("Product TRUE: " + JSON.stringify(product.product));  
    console.log("ITEM : " + JSON.stringify(item));      
    if (item) console.log(item.id);
    
    console.log("Product: " + JSON.stringify(product));
    console.log("ERROR : " + error);
    
    return {
      item,
      error,
      loading
    };
  };
  
  export default connect(mapStateToProps, {
    getProduct
  })(Product);
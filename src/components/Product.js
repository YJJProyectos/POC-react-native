import React, { Component } from "react";
import { Text, View, TouchableOpacity, Linking, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { getProduct } from "../actions/product/productActions";
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './slider/SliderEntry';

class Product extends Component {


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

      renderProduct() {
        
        var sliderWidth = 250;
        var itemWidth = 240;

        return this.props.item ? (
        <View style={{flex: 1, 
        alignItems: 'center'}}>
            <View style={ {paddingTop: 18,}} >
                <Text style={{ fontSize: 19, color: "blue" }}>{ this.props.item.descripcionLarga}</Text>
            </View>
            <View View style={{flex: 1, 
            alignItems: 'center'}}>
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
                />
                <Text>ID { this.props.item.id }</Text> 
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
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Linking, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { getProduct } from "../actions/product/productActions";

class Product extends Component {


    componentWillMount() {
        // TODO verificar como pasar id
        const id = 1;
        this.props.getProduct(id);

      }

      renderLoading() {

        return this.props.loading ? <ActivityIndicator style={{flex: 1}} size="large" color="#1ac925" /> : null
      }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Product {this.props.loading}</Text>
                {this.renderLoading()}
                {/* {this.props.product
                .map((product, index) => (
                <TouchableOpacity onPress={() => {}} style={issuerButtonStyle} key={product.id}>
                    <Text style={issuerTextStyle}>{product.id}</Text>
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
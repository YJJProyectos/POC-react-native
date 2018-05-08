import React, { Component } from "react";
import { Text, View, WebView, Linking } from "react-native";
import { connect } from "react-redux";
import { issuerChanged, authTokenChanged } from "../actions/Issuer/IssuerActions";

class Issuer extends Component {

  constructor(props){
    super(props);
    //alert(JSON.stringify(props))
  }

  render() {
    const { viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text>{this.props.authToken}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1
  }
};

const mapStateToProps = ({ issuer }) => {
  const { selectedIssuer, authToken, error, loading } = issuer;
  return {
    selectedIssuer,
    authToken,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  issuerChanged,
  authTokenChanged
})(Issuer);

import React, { Component } from "react";
import { Text, View, TouchableOpacity, Linking, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { getIssuers, goToIssuer } from "../actions/IssuerList/IssuerListActions";

class IssuerList extends Component {

  componentWillMount() {
    Linking.addEventListener('url', this.handleOpenURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
    this.props.getIssuers();
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    const authToken = url.indexOf("?") ? url.split("?")[1] : "";
    if(authToken !== "") {
      alert(authToken);
      this.goToIssuer(authToken);
    }
  };

  goToIssuer(authToken) {
    this.props.goToIssuer(authToken);
  }

  renderLoading() {
    return this.props.loading ? <ActivityIndicator style={{flex: 1}} size="large" color="#dd4b39" /> : null
  }

  login(issuer) {
    Linking.openURL(issuer.url);
  }

  render() {
    const { viewStyle, issuerButtonStyle, issuerTextStyle } = styles;
    return (
      <View style={viewStyle}>
      {this.renderLoading()}
      {this.props.issuers
        .map((issuer, index) => (
          <TouchableOpacity onPress={() => {this.login(issuer)}} style={issuerButtonStyle} key={issuer.issuer}>
            <Text style={issuerTextStyle}>{issuer.issuer}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    margin: 50,
    alignItems: "center",
    flexDirection: "column",
  },
  issuerButtonStyle: {
    borderWidth: 1,
    borderColor: "#dd4b39",
    borderRadius: 5,
    backgroundColor: "#dd4b39",
    marginBottom: 10
  },
  issuerTextStyle: {
    fontSize: 40,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    color: "white"
  }
};

const mapStateToProps = ({ issuersList }) => {
  const { issuers, error, loading } = issuersList;
  return {
    issuers,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  getIssuers,
  goToIssuer,
})(IssuerList);

import React from "react";
import {
  Scene,
  Router,
  Stack
} from "react-native-router-flux";

import Issuer from "./components/Issuer";
import IssuerList from "./components/IssuerList";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
        key="issuer_list"
        component={IssuerList}
        title="Seleccioná un proveedor"
        />
        <Scene
        key="issuer"
        component={Issuer}
        title="Issuer"
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;

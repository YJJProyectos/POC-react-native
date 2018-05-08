import React from "react";
import { Scene, Router, Stack, Drawer } from "react-native-router-flux";

import IssuerList from "./components/IssuerList";
import Home from "./components/Home";
import Product from "./components/Product";

import DrawerContent from "./components/shared/drawer/DrawerContent";
import MenuIcon from "./assets/menu_icon.png";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Drawer
          key="main"
          contentComponent={DrawerContent}
          drawerImage={MenuIcon}
          drawerWidth={250}
          hideNavBar
        >
          <Scene
            key="home"
            component={Home}
            navigationBarStyle={{ backgroundColor: "green" }}
            hideNavBar={false}
          />
          <Scene
            key="product"
            component={Product}
            navigationBarStyle={{ backgroundColor: "green" }}
            panHandlers={null}
            hideNavBar={false}
          />
        </Drawer>
        <Scene
          key="issuer_list"
          component={IssuerList}
          title="Seleccioná un proveedor"
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;

import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import firebase from "../config";

import CustomSidebarMenu from "../screens/CustomSidebarMenu";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true
    };
  }
fetchid=()=>{
   let theme;
    firebase
      .ref("/users/jT9vClO81vPtMCjuCrUMAQpuAYc2/")
      .on("value", snapshot => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === "light" });
      });
}
  componentDidMount() { 
   this.fetchid();
  }

  render() {
  let props = this.props;
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: this.state.light_theme ? "black" : "white",
          itemStyle: { marginVertical: 5 }
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="Inicio"
          component={StackNavigator}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Perfil"
          component={Profile}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}
import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from '../config';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default class CustomSidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true,
    };
  }

  componentDidMount() {
    this.gettheme();
  }

  gettheme = () => {
    let theme;
    firebase
      .ref("/users/jT9vClO81vPtMCjuCrUMAQpuAYc2/")
      .on("value", snapshot => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === "light" });
      });
  };

  render() {
    let props = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.state.light_theme ? 'white' : '#15193c',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.sideMenuProfileIcon}></Image>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70),
    alignSelf: 'center',
    marginTop: RFValue(60),
    resizeMode: 'contain',
  },
});

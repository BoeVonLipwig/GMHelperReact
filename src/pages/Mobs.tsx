import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView} from 'react-native';
import {Router, Scene} from "react-native-router-flux";
import {FloatingAction} from "react-native-floating-action";

export class Mobs extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}><Text>Hello</Text>{this.fabButton()}</View>
    );
  }

  private addChar() {

  }


  fabButton() {

    const actions = [{
      text: FabConfig.add.text,
      position: FabConfig.add.position,
      name: FabConfig.add.name,
    }];

    return (
      <FloatingAction actions={actions} overrideWithAction={true} onPressItem={
        (name) => {
          if (FabConfig.add.name.localeCompare(name + "") == 0) {
            this.addChar();
          }
        }
      }/>
    )

  }
}

export const FabConfig = {
  add:{
    text: "Add",
    name: "add",
    position: 1,
  }
};

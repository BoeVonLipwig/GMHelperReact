import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView} from 'react-native';
import {FloatingAction} from "react-native-floating-action";

export class NPCs extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}><Text>Hello</Text>{this.fabButton()}</View>
    );
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

  private addChar() {

  }
}

export const FabConfig = {
  add: {
    text: "Add",
    name: "add",
    position: 1,
  }
};

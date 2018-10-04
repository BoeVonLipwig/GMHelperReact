import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";

type Props = {
  character: CharacterModel,
  updateList: (char: CharacterModel) => {}
}

export class Character extends Component<Props> {
  render() {
    console.log("dsa");
    return (
      <View>
        <Text>{this.props.character.name}</Text>
      </View>
    );
  }
}

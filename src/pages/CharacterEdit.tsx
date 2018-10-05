import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";

type Props = {
  character: CharacterModel,
  updateCharacter: (char: CharacterModel) => {},
  index: number
}

export class Character extends Component<Props> {
  render() {
    return (
      <View>
        <Text>{this.props.character.name}</Text>
      </View>
    );
  }
}

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
      <View style={{flex: 1}}>
        <Text>{this.props.character.name}</Text>
        {this.fabButton()}
      </View>
    );
  }

  fabButton() {

    const actions = [
      {
        text: FabConfig.edit.text,
        position: FabConfig.edit.position,
        name: FabConfig.edit.name
      }, {
        text: FabConfig.upload.text,
        position: FabConfig.upload.position,
        name: FabConfig.upload.name
      }

    ];

    return (
      <FloatingAction actions={actions} onPressItem={
        (name) => {
          if (FabConfig.edit.name.localeCompare(name + "") == 0) {
            this.edit();
          } else {
            this.upload();
          }
        }
      }/>
    )

  }

  private edit() {

  }

  private upload() {

  }
}

export const styles = StyleSheet.create({
    listItem: {
      borderRadius: 0,
      borderWidth: 0.5,
      borderColor: '#d6d7da',

      backgroundColor: "#d6d6d6",
      width: "90%",
      height: 40,
      alignItems: "center",
      justifyContent: 'center',
      alignSelf: "center",
    }
  }
);

export const FabConfig = {
  edit: {
    text: "Edit",
    name: "edit",
    position: 1
  },
  upload: {
    text: "Upload",
    name: "upload",
    position: 1
  }
};

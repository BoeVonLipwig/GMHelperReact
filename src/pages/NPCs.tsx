import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";
import {Actions} from "react-native-router-flux";


type StateType = {
  npcs: CharacterModel[]
}

export class NPCs extends Component<{}, StateType> {

  constructor(props: any) {
    super(props);
    this.state = {
      npcs: []
    }
  }

  componentDidMount() {
  }

  private addChar() {

  }

  updateChar(char: CharacterModel){

  }

  render() {
    return (
      <View style={{flex: 1}}>{this.state.npcs.map((npc, i) =>
        <TouchableOpacity onPress={() => Actions.push('character', {character: npc, updateChar: this.updateChar.bind(this)})} style={styles.listItem} key={i}>
          <Text>{npc.name}</Text>
        </TouchableOpacity>)
      }{this.fabButton()}</View>

    );
  }

  private download() {

  }

  fabButton() {

    const actions = [
      {
        text: FabConfig.add.text,
        position: FabConfig.add.position,
        name: FabConfig.add.name
      }, {
        text: FabConfig.download.text,
        position: FabConfig.download.position,
        name: FabConfig.download.name
      }

    ];

    return (
      <FloatingAction actions={actions} onPressItem={
        (name) => {
          if (FabConfig.add.name.localeCompare(name + "") == 0) {
            this.addChar();
          } else {
            this.download();
          }
        }
      }/>
    )

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
  add: {
    text: "Add",
    name: "add",
    position: 1
  },
  download: {
    text: "Download",
    name: "download",
    position: 1
  }
};

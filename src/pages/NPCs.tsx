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
    let char: CharacterModel = {
      name: "Click",
      race: "npc",
      class: "to edit",
      maxHitPoints: 0,
      curHitPoints: 0,
      stats: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        is: 0,
        cha: 0
      },
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    };
    this.setState({npcs: this.state.npcs.concat(char)})
  }

  updateChar(char: CharacterModel, index: number) {
    let newNpcs = this.state.npcs;
    newNpcs[index] = char;
    this.setState({npcs: newNpcs})
  }

  render() {
    return (
      <View style={{flex: 1}}>{this.state.npcs.map((npc, i) =>
        <TouchableOpacity
          onPress={() => Actions.push('character', {
            character: npc,
            updateChar: this.updateChar.bind(this),
            index: i,
            title: npc.name
          })}
          style={styles.listItem} key={i}>
          <Text>{npc.name + " the " + npc.race + " " + npc.class}</Text>
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
    position: 2
  }
};

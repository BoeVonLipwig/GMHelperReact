import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";
import {Actions} from "react-native-router-flux";

type StateType = {
  mobs: CharacterModel[]
}

export class Mobs extends Component<{}, StateType> {

  constructor(props: any) {
    super(props);
    this.state = {
      mobs: []
    }
  }

  componentDidMount() {
  }

  private addChar() {
    let char: CharacterModel = {
      name: "Click",
      race: "mob",
      class: "to edit",
      maxHitPoints: 0,
      curHitPoints: 0,
      armorClass: 0,
      stats: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
      },
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    };
    this.setState({mobs: this.state.mobs.concat(char)})
  }

  updateChar(char: CharacterModel, index: number) {
    let newMobs = this.state.mobs;
    newMobs[index] = char;
    this.setState({mobs: newMobs})
  }

  render() {
    return (
      <View style={{flex: 1}}>{this.state.mobs.map((mob, i) =>
        <TouchableOpacity
          onPress={() => Actions.push('character', {
            character: mob,
            updateChar: this.updateChar.bind(this),
            index: i,
            title: mob.name
          })}
          style={styles.listItem} key={i}>
          <Text>{mob.name + " the " + mob.race + " " + mob.class}</Text>
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
          console.log("button pressed");
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

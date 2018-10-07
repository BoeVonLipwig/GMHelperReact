import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";
import {Actions} from "react-native-router-flux";

type StateType = {
  players: CharacterModel[],
  update: number
}

export class Players extends Component<{}, StateType> {

  constructor(props: any) {
    super(props);
    this.state = {
      players: [],
      update: 0
    };

  }

  private addChar() {
    let char: CharacterModel = {
        name: "Aarok",
        race: "Human",
        class: "Warlock",
        maxHitPoints: 18,
        curHitPoints: 12,
        armorClass: 16,
        stats: {
          str: 13,
          dex: 12,
          con: 14,
          int: 13,
          wis: 10,
          cha: 18
        },
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      }
    ;
    this.setState({players: this.state.players.concat(char)})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.players.map((player, i) =>
          <TouchableOpacity
            onPress={() => this.viewPlayer(player, i)}
            style={styles.listItem} key={i}>
            <Text>{player.name + " the " + player.race + " " + player.class}</Text>
          </TouchableOpacity>)
        }
        {this.fabButton()}
      </View>
    );
  }

  private download() {
    //firebaseTings
  }

  componentDidMount() {
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

  private update(){
    this.setState({update: this.state.update + 1})
  }

  private viewPlayer(player: CharacterModel, i: number) {
    Actions.push('character', {
      character: player,
      index: i,
      title: player.name
    })
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

import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";

type Props = {
  players: CharacterModel[],
  addPlayers: (players: CharacterModel[]) => {}
  updateList: (char: CharacterModel, list: String) => {}
}

export class Players extends Component<Props> {

  constructor(props: Props) {
    super(props);
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

  private gotoCharacter(player: CharacterModel, i: number) {

  }

  render() {
    return (
      <View style={{flex: 1}}>{this.props.players.map((player, i) =>
        <TouchableOpacity
          onPress={() => this.gotoCharacter(player, i)}
          style={styles.listItem}
          key={i}
        >
          <Text>{player.name}</Text>
        </TouchableOpacity>)
      }{this.fabButton()}</View>

    );
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
    position: 1,
  }
};

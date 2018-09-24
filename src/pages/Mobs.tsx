import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";

type Props = {
  mobs: CharacterModel[],
  updateMobs: (mobs: CharacterModel[]) => {}
}

export class Mobs extends React.Component<Props> {

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

  private gotoCharacter(mobs: CharacterModel, i: any) {

  }

  render() {
    return (
      <View style={{flex: 1}}>{this.props.mobs.map((mob, i) =>
        <TouchableOpacity
          onPress={() => this.gotoCharacter(mob, i)}
          style={styles.listItem}
          key={i}
        >
          <Text>{mob.race}</Text>
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

import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";
import {Actions} from "react-native-router-flux";

type Props = {
  character: CharacterModel,
  updateCharacter: (char: CharacterModel) => {},
  index: number
}

type State = {
  update: number
}

export class Character extends Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      update: 0
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <View>
          <Text style={styles.textStyle}>
            Race: {this.props.character.race}
          </Text>
          <Text style={styles.textStyle}>
            Class: {this.props.character.class}
          </Text>
        </View>


        <View style={{flexDirection: 'row', padding: 10}}>
          <TouchableOpacity
            style={styles.buttonStyleLower}
            onPress={() => this.charHealth(-1)}>
            <Text> - </Text>
          </TouchableOpacity>

          <Text style={{
            fontSize: 20,
            paddingRight: 10,
            paddingLeft: 10,
          }}>
            {this.props.character.curHitPoints}/{this.props.character.maxHitPoints}
          </Text>

          <TouchableOpacity
            style={styles.buttonStyleAdd}
            onPress={() => this.charHealth(-1)}>
            <Text> + </Text>
          </TouchableOpacity>
        </View>

        {this.printStats()}
        {this.fabButton()}
      </View>
    );
  }

  private printStats() {
    return (
      <View>
        <Text>Stats</Text>
        <View></View>
      </View>
    )
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
    Actions.push('characterEdit', {
      character: this.props.character,
      updateCharacter: this.props.updateCharacter,
      index: this.props.index
    });
  }

  private upload() {

  }

  private charHealth(int: number) {
    let hp = this.props.character.curHitPoints + int;
    if (hp < 0) hp = 0;
    else if (hp >= this.props.character.maxHitPoints) hp = this.props.character.maxHitPoints;
    console.log(this.props.character.curHitPoints);
    this.props.character.curHitPoints = hp;
    console.log(this.props.character.curHitPoints);
    this.setState({update: this.state.update + 1})
  }
}

export const styles = StyleSheet.create({
  buttonStyleLower: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'rgb(255,0,0)'
  }, buttonStyleAdd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'rgb(0,0,255)'
  }, textStyle: {
    fontSize: 20,
    padding: 10
  }
});

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

import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";
import {Actions} from "react-native-router-flux";

type Props = {
  character: CharacterModel,
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
        {this.info()}
        {this.displayHealth()}
        {this.printStats()}
        {this.fabButton()}
      </View>
    );
  }

  private info() {
    return (
      <View>
        <Text style={styles.textStyle}>
          Race: {this.props.character.race}
        </Text>
        <Text style={styles.textStyle}>
          Class: {this.props.character.class}
        </Text>
        <Text style={styles.textStyle}>
          AC: {this.props.character.armorClass}
        </Text>
      </View>
    );
  }

  private displayHealth() {
    return (
      <View style={{flexDirection: 'row', paddingLeft: 10}}>

        <Text style={{
          fontSize: 20,
          paddingRight: 10,
        }}>
          Hit points:
        </Text>

        <TouchableOpacity
          style={styles.buttonStyleLower}
          onPress={() => this.charHealth(-1)}>
          <Text> - </Text>
        </TouchableOpacity>

        <Text style={{
          fontSize: 20,
          paddingRight: 10,
          paddingLeft: 10
        }}>
          {this.props.character.curHitPoints}/{this.props.character.maxHitPoints}
        </Text>

        <TouchableOpacity
          style={styles.buttonStyleAdd}
          onPress={() => this.charHealth(1)}>
          <Text> + </Text>
        </TouchableOpacity>
      </View>
    );
  }

  private charHealth(int: number) {
    let hp = this.props.character.curHitPoints + int;
    if (hp < 0) hp = 0;
    else if (hp >= this.props.character.maxHitPoints) hp = this.props.character.maxHitPoints;
    this.props.character.curHitPoints = hp;
    this.setState({update: this.state.update + 1})
  }

  private printStats() {
    let stats = this.props.character.stats;
    return (
      <View
        style={{paddingLeft: 10}}
      >
        <Text style={{fontSize: 20, paddingTop: 10}}>Stats:</Text>
        <View>
          <Text style={styles.statsStyle}>
            Str: {stats.str}
          </Text>
          <Text style={styles.statsStyle}>
            Dex: {stats.dex}
          </Text>
          <Text style={styles.statsStyle}>
            Con: {stats.con}
          </Text>
          <Text style={styles.statsStyle}>
            Int: {stats.int}
          </Text>
          <Text style={styles.statsStyle}>
            Wis: {stats.wis}
          </Text>
          <Text style={styles.statsStyle}>
            Chr: {stats.cha}
          </Text>
        </View>
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
      index: this.props.index,
      updateChar: this.updateChar.bind(this),
      title: this.props.character.name
    });
  }

  private upload() {

  }

  private updateChar(char:CharacterModel) {
    this.setState({update: this.state.update + 1})
  }
}

export const styles = StyleSheet.create({
  buttonStyleLower: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 25,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'rgb(255,0,0)'
  }, buttonStyleAdd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 25,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'rgb(0,0,255)'
  }, textStyle: {
    fontSize: 20,
    padding: 10
  }, statsStyle: {
    fontSize: 15,
    paddingLeft: 18
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

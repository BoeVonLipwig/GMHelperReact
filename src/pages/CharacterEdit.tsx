import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity, TextInput} from 'react-native';
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

export class CharacterEdit extends Component<Props, State> {

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
        {this.printStats()}
        {this.fabButton()}
      </View>
    );
  }

  private info() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>
            Name:
          </Text>
          <TextInput style={styles.textStyle}>{this.props.character.name}</TextInput>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>
            Race:
          </Text>
          <TextInput style={styles.textStyle}>{this.props.character.race}</TextInput>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>
            Class:
          </Text>
          <TextInput style={styles.textStyle}>{this.props.character.class}</TextInput>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>
            AC:
          </Text>
          <TextInput style={styles.textStyle}>{this.props.character.armorClass}</TextInput>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>
            Max Hit Points:
          </Text>
          <TextInput style={styles.textStyle}> {this.props.character.maxHitPoints}</TextInput>
        </View>

      </View>
    );
  }

  private printStats() {
    let stats = this.props.character.stats;
    return (
      <View style={{paddingLeft: 10}}>
        <Text style={{fontSize: 20, paddingTop: 10}}>Stats:</Text>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.statsStyle}>
              Str:
            </Text>
            <TextInput
              style={styles.statsStyle}
              value={stats.str + ""}
              onChangeText={() => this.props.character.stats.str}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.statsStyle}>
              Dex:
            </Text>
            <TextInput
              style={styles.statsStyle}
              value={stats.dex + ""}
              onChangeText={() => this.props.character.stats.dex}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.statsStyle}>
              Con:
            </Text>
            <TextInput
              style={styles.statsStyle}
              value={stats.con + ""}
              onChangeText={() => this.props.character.stats.con}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.statsStyle}>
              Int:
            </Text>
            <TextInput
              style={styles.statsStyle}
              value={stats.int + ""}
              onChangeText={() => this.props.character.stats.int}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            < Text style={styles.statsStyle}>
              Wis:
            </Text>
            <TextInput
              style={styles.statsStyle}
              value={stats.wis + " "}
              onChangeText={() => this.props.character.stats.wis}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.statsStyle}>
              Chr:
            </Text>
            <TextInput
              style={styles.statsStyle}
              value={stats.cha + ""}
              onChangeText={() => this.props.character.stats.cha}/>
          </View>
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
      updateCharacter: this.props.updateCharacter,
      index: this.props.index,
      title: this.props.character.name
    });
  }

  private upload() {

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
    fontSize: 10,
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

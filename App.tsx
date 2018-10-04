import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';
import {Actions, Router, Scene} from "react-native-router-flux";
import {Players} from "./src/pages/Players";
import {NPCs} from "./src/pages/NPCs";
import {Mobs} from "./src/pages/Mobs";
import {CharacterModel} from "./src/data/CharacterModel";
import {FloatingAction} from "react-native-floating-action";

type StateType = {
  players: CharacterModel[];
  npcs: CharacterModel[];
  mobs: CharacterModel[];
}

// @ts-ignore
const TabIcon = ({title}) => {
  return (
    <Text>{title}</Text>
  )
};

export default class App extends Component<{}, StateType> {

  constructor(props: any) {
    super(props);
    this.state = {
      players: [],
      npcs: [],
      mobs: []
      // firebase things?
    };

  }


  componentDidMount() {
    // firebase things?
    let char: CharacterModel = {name: "Aarok", race: "Human", class: "Warlock"};
    const pl = this.state.players.concat(char);
    let npc: CharacterModel = {name: "Test NPC", race: "Human", class: "Warlock"};
    const np = this.state.npcs.concat(npc);
    let mob: CharacterModel = {name: "Aarok", race: "Gnoll", class: "Warlock"};
    const mb = this.state.mobs.concat(mob);
    this.setState({players: pl, mobs: mb, npcs: np})
  }

  render() {
    return (
      <Router>
        <Scene key='root' tabs={true} hideNavBar={true}>
          <Scene key='tab1' title='Players' component={Players} players={this.state.players} icon={TabIcon}
                 addPlayer={this.addPlayers.bind(this)} update={this.updatePlayer.bind(this)} initial={true}/>
          <Scene key='tab2' title='NPCs' component={NPCs} npcs={this.state.npcs} icon={TabIcon}
                 addNPC={this.addNPCs.bind(this)} update={this.updateNPC.bind(this)}/>
          <Scene key='tab3' title='Mobs' component={Mobs} mobs={this.state.mobs} icon={TabIcon}
                 addMob={this.addMobs.bind(this)} update={this.updateMob.bind(this)}/>
        </Scene>
      </Router>
    );
  }

  updatePlayer(char: CharacterModel) {

  }

  updateNPC(char: CharacterModel) {

  }

  updateMob(char: CharacterModel) {

  }

  addPlayers(players: CharacterModel[]) {
    this.setState({players});
  }

  addNPCs(npcs: CharacterModel[]) {
    this.setState({npcs});
  }

  addMobs(mobs: CharacterModel[]) {
    this.setState({mobs});
  }
}

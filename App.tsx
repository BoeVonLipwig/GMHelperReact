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
import {
  createStackNavigator,
} from 'react-navigation';

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

export default class App extends React.Component<StateType> {

  constructor(props: any) {
    super(props);
    this.state = {

      // firebase things?
    };
  }



  componentDidMount() {
    // firebase things?
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Router>
        <Scene key='root' tabs={true} hideNavBar={true}>
          <Scene key='tab1' title='Players' component={Players} onPress={() => navigate('players', {text: 'name'})}
                 icon={TabIcon} initial={true}/>
          <Scene key='tab2' title='NPCs' component={NPCs} icon={TabIcon}/>
          <Scene key='tab3' title='Mobs' component={Mobs} icon={TabIcon}/>
        </Scene>
      </Router>
    );
  }

}

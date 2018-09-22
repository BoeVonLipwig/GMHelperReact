import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView} from 'react-native';

import firebase from 'react-native-firebase';
import {Router, Scene} from "react-native-router-flux";
import {Characters} from "./src/pages/Characters";
import {Maps} from "./src/pages/Maps";

type PropType = {
  name: string;
}

export default class App extends React.Component {

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
    return (
      <Router>
        <Scene key='root' tabs={true}>
          <Scene key='tab1' title='Players' component={Characters} icon={TabIcon}/>
          <Scene key='tab2' title='NPCs' component={Characters} icon={TabIcon}/>
          <Scene key='tab3' title='Mobs' component={Characters} icon={TabIcon}/>
          <Scene key='tab4' title='Maps' component={Maps} icon={TabIcon}/>
        </Scene>
      </Router>
    );
  }

}

class TabIcon extends React.Component {

  render() {
    return (
      <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <Text style={{
          textAlign: 'center',
          fontSize: 20
        }}>{this.props.name}</Text>
      </View>
    );
  }
}

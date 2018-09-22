import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView} from 'react-native';

import firebase from 'react-native-firebase';
import {Router, Scene} from "react-native-router-flux";
import {Characters} from "./src/pages/Characters";
import {Maps} from "./src/pages/Maps";
import {Tab} from "./src/components/Tab";

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
          <Scene key='tab1' title='Maps' component={Maps} icon={Tab}/>
          <Scene key='tab2' title='Players' component={Characters} icon={Tab}/>
          <Scene key='tab3' title='NPCs' component={Characters} icon={Tab}/>
          <Scene key='tab4' title='Mobs' component={Characters} icon={Tab}/>
        </Scene>
      </Router>
    );
  }

}

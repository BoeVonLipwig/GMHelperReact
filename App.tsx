import React from 'react';
import {Component} from 'react';
import {Text} from 'react-native';
import {Router, Scene} from "react-native-router-flux";
import {Players} from "./src/pages/Players";
import {NPCs} from "./src/pages/NPCs";
import {Mobs} from "./src/pages/Mobs";

// @ts-ignore
const TabIcon = ({title}) => {
  return (
    <Text>{title}</Text>
  )
};

export default class App extends Component<{}> {

  render() {
    return (
      <Router>
        <Scene key='root' tabs={true} hideNavBar={true}>
          <Scene key='tab1' title='Players' component={Players} icon={TabIcon} initial={true}/>
          <Scene key='tab2' title='NPCs' component={NPCs} icon={TabIcon}/>
          <Scene key='tab3' title='Mobs' component={Mobs} icon={TabIcon}/>
        </Scene>
      </Router>
    );
  }

}

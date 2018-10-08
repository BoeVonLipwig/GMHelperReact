import React from 'react';
import {Component} from 'react';
import {Text} from 'react-native';
import {Router, Scene} from "react-native-router-flux";
import {Players} from "./src/pages/Players";
import {NPCs} from "./src/pages/NPCs";
import {Mobs} from "./src/pages/Mobs";
import {Character} from "./src/pages/Character";
import {CharacterEdit} from "./src/pages/CharacterEdit";
import * as firebase from "firebase";
import Firestore = firebase.firestore.Firestore;
import {FirebaseController} from "./src/data/FirebaseController";

// @ts-ignore
const TabIcon = ({title}) => {
    return (
        <Text>{title}</Text>
    )
};

export default class App extends Component<{}> {


    componentDidMount() {
        FirebaseController.init();
    }

    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='tabs' tabs={true} hideNavBar={true}>
                        <Scene key='tab1' title='Players' component={Players} icon={TabIcon} initial={true}/>
                        <Scene key='tab2' title='NPCs' component={NPCs} icon={TabIcon}/>
                        <Scene key='tab3' title='Mobs' component={Mobs} icon={TabIcon}/>
                    </Scene>
                    <Scene key='character' component={Character}/>
                    <Scene key='characterEdit' component={CharacterEdit}/>
                </Scene>
            </Router>
        );
    }

}

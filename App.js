var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from "react-native-router-flux";
import { Players } from "./src/pages/Players";
import { NPCs } from "./src/pages/NPCs";
import { Mobs } from "./src/pages/Mobs";
import { Character } from "./src/pages/Character";
import { CharacterEdit } from "./src/pages/CharacterEdit";
import { FirebaseController } from "./src/data/FirebaseController";
// @ts-ignore
var TabIcon = function (_a) {
    var title = _a.title;
    return (<Text>{title}</Text>);
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        FirebaseController.init();
    };
    App.prototype.render = function () {
        return (<Router>
                <Scene key='root'>
                    <Scene key='tabs' tabs={true} hideNavBar={true}>
                        <Scene key='tab1' title='Players' component={Players} icon={TabIcon} initial={true}/>
                        <Scene key='tab2' title='NPCs' component={NPCs} icon={TabIcon}/>
                        <Scene key='tab3' title='Mobs' component={Mobs} icon={TabIcon}/>
                    </Scene>
                    <Scene key='character' component={Character}/>
                    <Scene key='characterEdit' component={CharacterEdit}/>
                </Scene>
            </Router>);
    };
    return App;
}(Component));
export default App;

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
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { Actions } from "react-native-router-flux";
import { FirebaseController } from "../data/FirebaseController";
var Mobs = /** @class */ (function (_super) {
    __extends(Mobs, _super);
    function Mobs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            mobs: [],
            update: 0
        };
        return _this;
    }
    Mobs.prototype.componentDidMount = function () {
    };
    Mobs.prototype.render = function () {
        var _this = this;
        return (<View style={{ flex: 1 }}>
                {this.state.mobs.map(function (mob, i) {
            return <TouchableOpacity onPress={function () { return _this.viewMob(mob, i); }} style={styles.listItem} key={i}>
                        <Text>{mob.name + " the " + mob.race + " " + mob.class}</Text>
                    </TouchableOpacity>;
        })}
                {this.fabButton()}
            </View>);
    };
    Mobs.prototype.addChar = function () {
        var char = {
            name: "Click",
            race: "mob",
            class: "to edit",
            maxHitPoints: 0,
            curHitPoints: 0,
            armorClass: 0,
            stats: {
                str: 0,
                dex: 0,
                con: 0,
                int: 0,
                wis: 0,
                cha: 0
            },
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        };
        this.setState({ mobs: this.state.mobs.concat(char) });
    };
    Mobs.prototype.download = function () {
        var _this = this;
        var firebasePromiseLocal = FirebaseController.downloadAllChars("players").then(function (query) {
            var chars = FirebaseController.getChars(query);
            for (var i = 0; i < chars.length; i++) {
                var curChar = chars[i];
                var char = {
                    name: curChar.name,
                    race: curChar.race,
                    class: curChar.class,
                    maxHitPoints: curChar.maxHitPoints,
                    curHitPoints: curChar.curHitPoints,
                    armorClass: curChar.armorClass,
                    stats: curChar.stats,
                    id: curChar.id
                };
                _this.setChar(char);
            }
        }).catch(function () {
            console.log(firebasePromiseLocal);
        });
    };
    Mobs.prototype.setChar = function (char) {
        var x = -1;
        for (var i = 0; i < this.state.mobs.length; i++) {
            if (this.state.mobs[i].id === char.id) {
                x = i;
                break;
            }
        }
        if (x > 0) {
            var newMobs = this.state.mobs;
            newMobs[x] = char;
            this.setState({ mobs: newMobs });
        }
        else {
            this.setState({ mobs: this.state.mobs.concat(char) });
        }
    };
    // noinspection JSMethodCanBeStatic
    Mobs.prototype.viewMob = function (mob, i) {
        Actions.push('character', {
            character: mob,
            index: i,
            type: "mobs",
            title: mob.name
        });
    };
    Mobs.prototype.fabButton = function () {
        var _this = this;
        var actions = [
            {
                text: FabConfig.add.text,
                position: FabConfig.add.position,
                name: FabConfig.add.name
            }, {
                text: FabConfig.download.text,
                position: FabConfig.download.position,
                name: FabConfig.download.name
            }
        ];
        return (<FloatingAction actions={actions} onPressItem={function (name) {
            console.log("button pressed");
            if (FabConfig.add.name.localeCompare(name + "") == 0) {
                _this.addChar();
            }
            else {
                _this.download();
            }
        }}/>);
    };
    return Mobs;
}(Component));
export { Mobs };
export var styles = StyleSheet.create({
    listItem: {
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: "#d6d6d6",
        width: "90%",
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: "center",
    }
});
export var FabConfig = {
    add: {
        text: "Add",
        name: "add",
        position: 1
    },
    download: {
        text: "Download",
        name: "download",
        position: 2
    }
};

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
var NPCs = /** @class */ (function (_super) {
    __extends(NPCs, _super);
    function NPCs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            npcs: [],
            update: 0
        };
        return _this;
    }
    NPCs.prototype.componentDidMount = function () {
    };
    NPCs.prototype.render = function () {
        var _this = this;
        return (<View style={{ flex: 1 }}>
                {this.state.npcs.map(function (npc, i) {
            return <TouchableOpacity onPress={function () { return _this.viewNpc(npc, i); }} style={styles.listItem} key={i}>
                        <Text>{npc.name + " the " + npc.race + " " + npc.class}</Text>
                    </TouchableOpacity>;
        })}
                {this.fabButton()}
            </View>);
    };
    NPCs.prototype.addChar = function () {
        var char = {
            name: "Click",
            race: "npc",
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
        this.setState({ npcs: this.state.npcs.concat(char) });
    };
    NPCs.prototype.download = function () {
        var _this = this;
        var firebasePromiseLocal = FirebaseController.downloadAllChars("npcs").then(function (query) {
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
    NPCs.prototype.setChar = function (char) {
        var x = -1;
        for (var i = 0; i < this.state.npcs.length; i++) {
            if (this.state.npcs[i].id === char.id) {
                x = i;
                break;
            }
        }
        if (x > 0) {
            var newNPCs = this.state.npcs;
            newNPCs[x] = char;
            this.setState({ npcs: newNPCs });
        }
        else {
            this.setState({ npcs: this.state.npcs.concat(char) });
        }
    };
    // noinspection JSMethodCanBeStatic
    NPCs.prototype.viewNpc = function (npc, i) {
        Actions.push('character', {
            character: npc,
            index: i,
            type: "npcs",
            title: npc.name
        });
    };
    NPCs.prototype.fabButton = function () {
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
            if (FabConfig.add.name.localeCompare(name + "") == 0) {
                _this.addChar();
            }
            else {
                _this.download();
            }
        }}/>);
    };
    return NPCs;
}(Component));
export { NPCs };
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

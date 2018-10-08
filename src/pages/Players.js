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
var Players = /** @class */ (function (_super) {
    __extends(Players, _super);
    function Players(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            players: [],
            update: 0,
            ids: []
        };
        return _this;
    }
    Players.prototype.addChar = function () {
        var char = {
            name: "Aarok",
            race: "Human",
            class: "Warlock",
            maxHitPoints: 18,
            curHitPoints: 12,
            armorClass: 16,
            stats: {
                str: 13,
                dex: 12,
                con: 14,
                int: 13,
                wis: 10,
                cha: 18
            },
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        };
        this.setState({ players: this.state.players.concat(char) });
    };
    Players.prototype.render = function () {
        var _this = this;
        return (<View style={{ flex: 1 }}>
                {this.state.players.map(function (player, i) {
            return <TouchableOpacity onPress={function () { return _this.viewPlayer(player, i); }} style={styles.listItem} key={i}>
                        <Text>{player.name + " the " + player.race + " " + player.class}</Text>
                    </TouchableOpacity>;
        })}
                {this.fabButton()}
            </View>);
    };
    Players.prototype.download = function () {
        var firebasePromiseLocal = FirebaseController.downloadAllChars("players");
        firebasePromiseLocal.then(function (query) {
            console.log(query);
        }).catch(function () {
            console.log("help");
        });
    };
    Players.prototype.componentDidMount = function () {
    };
    Players.prototype.fabButton = function () {
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
    Players.prototype.update = function () {
        this.setState({ update: this.state.update + 1 });
    };
    // noinspection JSMethodCanBeStatic
    Players.prototype.viewPlayer = function (player, i) {
        Actions.push('character', {
            character: player,
            index: i,
            type: "players",
            title: player.name
        });
    };
    return Players;
}(Component));
export { Players };
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

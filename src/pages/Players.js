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
            update: 0
        };
        return _this;
    }
    Players.prototype.componentDidMount = function () {
    };
    Players.prototype.render = function () {
        var _this = this;
        console.log(this.state.players);
        return (<View style={{ flex: 1 }}>
                {this.state.players.map(function (player, i) {
            return <TouchableOpacity onPress={function () { return _this.viewPlayer(player, i); }} style={styles.listItem} key={i}>
                        <Text>{player.name + " the " + player.race + " " + player.class}</Text>
                        <TouchableOpacity style={{
                flexDirection: "row",
                backgroundColor: "rgb(255,0,0)",
                height: "100%",
                width: 50,
                alignItems: "center",
                justifyContent: "center"
            }} key={i} onPress={function () { return _this.deleteChar(i); }}>
                            <Text style={{ fontSize: 10 }}>{"Del"}</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>;
        })}
                {this.fabButton()}
            </View>);
    };
    Players.prototype.deleteChar = function (i) {
        var newList = this.state.players;
        newList.splice(i, 1);
        this.setState({ players: newList });
    };
    Players.prototype.addChar = function () {
        var char = {
            name: "Click",
            race: "Player",
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
        this.setState({ players: this.state.players.concat(char) });
        FirebaseController.send(char, "players");
    };
    Players.prototype.download = function () {
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
    Players.prototype.setChar = function (char) {
        var x = -1;
        for (var i = 0; i < this.state.players.length; i++) {
            if (this.state.players[i].id === char.id) {
                x = i;
                break;
            }
        }
        if (x > 0) {
            var newPlayers = this.state.players;
            newPlayers[x] = char;
            this.setState({ players: newPlayers });
        }
        else {
            this.setState({ players: this.state.players.concat(char) });
        }
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
    return Players;
}(Component));
export { Players };
export var styles = StyleSheet.create({
    listItem: {
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#d6d6d6",
        width: "90%",
        height: 40,
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

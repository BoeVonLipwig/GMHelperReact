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
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            update: 0
        };
        return _this;
    }
    Character.prototype.render = function () {
        return (<View style={{ flex: 1 }}>
                {this.info()}
                {this.displayHealth()}
                {this.printStats()}
                {this.fabButton()}
            </View>);
    };
    Character.prototype.info = function () {
        return (<View>
                <Text style={styles.textStyle}>
                    Race: {this.props.character.race}
                </Text>
                <Text style={styles.textStyle}>
                    Class: {this.props.character.class}
                </Text>
                <Text style={styles.textStyle}>
                    AC: {this.props.character.armorClass}
                </Text>
            </View>);
    };
    Character.prototype.displayHealth = function () {
        var _this = this;
        return (<View style={{ flexDirection: 'row', paddingLeft: 10 }}>

                <Text style={{
            fontSize: 20,
            paddingRight: 10,
        }}>
                    Hit points:
                </Text>

                <TouchableOpacity style={styles.buttonStyleLower} onPress={function () { return _this.charHealth(-1); }}>
                    <Text> - </Text>
                </TouchableOpacity>

                <Text style={{
            fontSize: 20,
            paddingRight: 10,
            paddingLeft: 10
        }}>
                    {this.props.character.curHitPoints}/{this.props.character.maxHitPoints}
                </Text>

                <TouchableOpacity style={styles.buttonStyleAdd} onPress={function () { return _this.charHealth(1); }}>
                    <Text> + </Text>
                </TouchableOpacity>
            </View>);
    };
    Character.prototype.charHealth = function (int) {
        var hp = this.props.character.curHitPoints + int;
        if (hp < 0)
            hp = 0;
        else if (hp >= this.props.character.maxHitPoints)
            hp = this.props.character.maxHitPoints;
        this.props.character.curHitPoints = hp;
        this.setState({ update: this.state.update + 1 });
    };
    Character.prototype.printStats = function () {
        var stats = this.props.character.stats;
        return (<View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 20, paddingTop: 10 }}>Stats:</Text>
                <View>
                    <Text style={styles.statsStyle}>
                        Str: {stats.str}
                    </Text>
                    <Text style={styles.statsStyle}>
                        Dex: {stats.dex}
                    </Text>
                    <Text style={styles.statsStyle}>
                        Con: {stats.con}
                    </Text>
                    <Text style={styles.statsStyle}>
                        Int: {stats.int}
                    </Text>
                    <Text style={styles.statsStyle}>
                        Wis: {stats.wis}
                    </Text>
                    <Text style={styles.statsStyle}>
                        Chr: {stats.cha}
                    </Text>
                </View>
            </View>);
    };
    Character.prototype.fabButton = function () {
        var _this = this;
        var actions = [
            {
                text: FabConfig.edit.text,
                position: FabConfig.edit.position,
                name: FabConfig.edit.name
            }, {
                text: FabConfig.upload.text,
                position: FabConfig.upload.position,
                name: FabConfig.upload.name
            }
        ];
        return (<FloatingAction actions={actions} onPressItem={function (name) {
            if (FabConfig.edit.name.localeCompare(name + "") == 0) {
                _this.edit();
            }
            else {
                _this.upload();
            }
        }}/>);
    };
    Character.prototype.edit = function () {
        Actions.push('characterEdit', {
            character: this.props.character,
            index: this.props.index,
            updateChar: this.updateChar.bind(this),
            title: this.props.character.name
        });
    };
    Character.prototype.upload = function () {
        FirebaseController.send(this.props.character, this.props.type);
    };
    Character.prototype.updateChar = function (char) {
        this.setState({ update: this.state.update + 1 });
    };
    return Character;
}(Component));
export { Character };
export var styles = StyleSheet.create({
    buttonStyleLower: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 25,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: 'rgb(255,0,0)'
    }, buttonStyleAdd: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 25,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: 'rgb(0,0,255)'
    }, textStyle: {
        fontSize: 20,
        padding: 10
    }, statsStyle: {
        fontSize: 15,
        paddingLeft: 18
    }
});
export var FabConfig = {
    edit: {
        text: "Edit",
        name: "edit",
        position: 1
    },
    upload: {
        text: "Upload",
        name: "upload",
        position: 2
    }
};

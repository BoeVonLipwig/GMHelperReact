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
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { Actions } from "react-native-router-flux";
import { FormInput } from "react-native-elements";
var CharacterEdit = /** @class */ (function (_super) {
    __extends(CharacterEdit, _super);
    function CharacterEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            update: 0
        };
        return _this;
    }
    CharacterEdit.prototype.render = function () {
        return (<ScrollView style={{ flex: 1 }}>
        {this.info()}
        {this.printStats()}
        {this.fabButton()}
      </ScrollView>);
    };
    CharacterEdit.prototype.info = function () {
        var _this = this;
        return (<View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textStyle}>
            Race:
          </Text>
          <FormInput defaultValue={this.props.character.race} onChangeText={function (text) { return _this.setValue(text, "race"); }}/>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textStyle}>
            Class:
          </Text>
          <FormInput defaultValue={this.props.character.class} onChangeText={function (text) { return _this.setValue(text, "class"); }}/>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textStyle}>
            AC:
          </Text>
          <FormInput defaultValue={this.props.character.armorClass + ""} onChangeText={function (text) { return _this.setValue(text, "ac"); }}/>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textStyle}>
            Max Hit Points:
          </Text>
          <FormInput defaultValue={this.props.character.maxHitPoints + ""} onChangeText={function (text) { return _this.setValue(text, "maxhp"); }}/>
        </View>

      </View>);
    };
    CharacterEdit.prototype.printStats = function () {
        var _this = this;
        var stats = this.props.character.stats;
        return (<View style={{ paddingLeft: 10 }}>
        <Text style={{ fontSize: 20, paddingTop: 10 }}>Stats:</Text>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.statsStyle}>
              Str:
            </Text>
            <FormInput defaultValue={stats.str + ""} onChangeText={function (text) { return _this.setStat(text, "str"); }}/>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.statsStyle}>
              Dex:
            </Text>
            <FormInput defaultValue={stats.dex + ""} onChangeText={function (text) { return _this.setStat(text, "dex"); }}/>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.statsStyle}>
              Con:
            </Text>
            <FormInput defaultValue={stats.con + ""} onChangeText={function (text) { return _this.setStat(text, "con"); }}/>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.statsStyle}>
              Int:
            </Text>
            <FormInput defaultValue={stats.int + ""} onChangeText={function (text) { return _this.setStat(text, "int"); }}/>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.statsStyle}>
              Wis:
            </Text>
            <FormInput defaultValue={stats.wis + " "} onChangeText={function (text) { return _this.setStat(text, "wis"); }}/>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.statsStyle}>
              Chr:
            </Text>
            <FormInput defaultValue={stats.cha + ""} onChangeText={function (text) { return _this.setStat(text, "cha"); }}/>
          </View>
        </View>
      </View>);
    };
    CharacterEdit.prototype.fabButton = function () {
        var _this = this;
        var actions = [
            {
                text: FabConfig.save.text,
                position: FabConfig.save.position,
                name: FabConfig.save.name
            }
        ];
        return (<FloatingAction actions={actions} onPressItem={function () {
            _this.save();
        }}/>);
    };
    CharacterEdit.prototype.save = function () {
        this.props.updateChar();
        Actions.pop();
    };
    CharacterEdit.prototype.setValue = function (text, type) {
        switch (type.toLowerCase()) {
            case "name":
                this.props.character.name = text;
                break;
            case "race":
                this.props.character.race = text;
                break;
            case "class":
                this.props.character.class = text;
                break;
            case "ac":
                this.props.character.armorClass = this.getNum(text);
                break;
            case "maxhp":
                this.props.character.maxHitPoints = this.getNum(text);
                break;
        }
        this.setState({ update: this.state.update + 1 });
    };
    CharacterEdit.prototype.setStat = function (text, type) {
        var num = this.getNum(text);
        switch (type.toLowerCase()) {
            case "str":
                this.props.character.stats.str = num;
                break;
            case "dex":
                this.props.character.stats.dex = num;
                break;
            case "con":
                this.props.character.stats.con = num;
                break;
            case "int":
                this.props.character.stats.int = num;
                break;
            case "wis":
                this.props.character.stats.wis = num;
                break;
            case "cha":
                this.props.character.stats.cha = num;
                break;
        }
        this.setState({ update: this.state.update + 1 });
    };
    // noinspection JSMethodCanBeStatic
    CharacterEdit.prototype.getNum = function (input) {
        var parsed = parseInt(input);
        if (isNaN(parsed) || parsed < 0) {
            parsed = 0;
        }
        return parsed;
    };
    return CharacterEdit;
}(Component));
export { CharacterEdit };
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
        fontSize: 10,
        paddingLeft: 18
    }
});
export var FabConfig = {
    save: {
        text: "Save",
        name: "save",
        position: 2
    }
};

"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var react_native_1 = require("react-native");
var react_native_floating_action_1 = require("react-native-floating-action");
var react_native_router_flux_1 = require("react-native-router-flux");
var react_native_elements_1 = require("react-native-elements");
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
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            this.info(),
            this.printStats(),
            this.fabButton()));
    };
    CharacterEdit.prototype.info = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "Name:"),
                react_1.default.createElement(react_native_elements_1.FormInput, { defaultValue: this.props.character.name, onChangeText: function (text) { return _this.setValue(text, "name"); } })),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "Race:"),
                react_1.default.createElement(react_native_elements_1.FormInput, { defaultValue: this.props.character.race, onChangeText: function (text) { return _this.setValue(text, "race"); } })),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "Class:"),
                react_1.default.createElement(react_native_elements_1.FormInput, { defaultValue: this.props.character.class, onChangeText: function (text) { return _this.setValue(text, "class"); } })),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "AC:"),
                react_1.default.createElement(react_native_elements_1.FormInput, { defaultValue: this.props.character.armorClass + "", onChangeText: function (text) { return _this.setValue(text, "ac"); } })),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "Max Hit Points:"),
                react_1.default.createElement(react_native_elements_1.FormInput, { defaultValue: this.props.character.maxHitPoints + "", onChangeText: function (text) { return _this.setValue(text, "maxhp"); } }))));
    };
    CharacterEdit.prototype.printStats = function () {
        var _this = this;
        var stats = this.props.character.stats;
        return (react_1.default.createElement(react_native_1.View, { style: { paddingLeft: 10 } },
            react_1.default.createElement(react_native_1.Text, { style: { fontSize: 20, paddingTop: 10 } }, "Stats:"),
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Str:"),
                    react_1.default.createElement(react_native_elements_1.FormInput, { defaultValue: stats.str + "", onChangeText: function (text) { return _this.setStat(text, "str"); } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Dex:"),
                    react_1.default.createElement(react_native_elements_1.FormInput, { value: stats.dex + "", onChangeText: function (text) { return _this.setStat(text, "dex"); } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Con:"),
                    react_1.default.createElement(react_native_elements_1.FormInput, { value: stats.con + "", onChangeText: function (text) { return _this.setStat(text, "con"); } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Int:"),
                    react_1.default.createElement(react_native_elements_1.FormInput, { value: stats.int + "", onChangeText: function (text) { return _this.setStat(text, "int"); } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Wis:"),
                    react_1.default.createElement(react_native_elements_1.FormInput, { value: stats.wis + " ", onChangeText: function (text) { return _this.setStat(text, "wis"); } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Chr:"),
                    react_1.default.createElement(react_native_elements_1.FormInput, { value: stats.cha + "", onChangeText: function (text) { return _this.setStat(text, "cha"); } })))));
    };
    CharacterEdit.prototype.fabButton = function () {
        var _this = this;
        var actions = [
            {
                text: exports.FabConfig.upload.text,
                position: exports.FabConfig.upload.position,
                name: exports.FabConfig.upload.name
            }, {
                text: exports.FabConfig.save.text,
                position: exports.FabConfig.save.position,
                name: exports.FabConfig.save.name
            }
        ];
        return (react_1.default.createElement(react_native_floating_action_1.FloatingAction, { actions: actions, onPressItem: function (name) {
                if (name === "upload")
                    _this.upload();
                else
                    _this.save();
            } }));
    };
    CharacterEdit.prototype.save = function () {
        this.props.updateChar(this.props.character);
        react_native_router_flux_1.Actions.pop();
    };
    CharacterEdit.prototype.upload = function () {
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
    CharacterEdit.prototype.getNum = function (input) {
        var parsed = parseInt(input);
        if (isNaN(parsed) || parsed < 0) {
            parsed = 0;
        }
        return parsed;
    };
    return CharacterEdit;
}(react_2.Component));
exports.CharacterEdit = CharacterEdit;
exports.styles = react_native_1.StyleSheet.create({
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
exports.FabConfig = {
    upload: {
        text: "Upload",
        name: "upload",
        position: 1
    }, save: {
        text: "Save",
        name: "save",
        position: 2
    }
};

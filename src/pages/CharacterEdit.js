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
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "Name:"),
                react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.textStyle }, this.props.character.name)),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "Race:"),
                react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.textStyle }, this.props.character.race)),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "Class:"),
                react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.textStyle }, this.props.character.class)),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "AC:"),
                react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.textStyle }, this.props.character.armorClass)),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle }, "Max Hit Points:"),
                react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.textStyle },
                    " ",
                    this.props.character.maxHitPoints))));
    };
    CharacterEdit.prototype.printStats = function () {
        var _this = this;
        var stats = this.props.character.stats;
        return (react_1.default.createElement(react_native_1.View, { style: { paddingLeft: 10 } },
            react_1.default.createElement(react_native_1.Text, { style: { fontSize: 20, paddingTop: 10 } }, "Stats:"),
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Str:"),
                    react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.statsStyle, value: stats.str + "", onChangeText: function () { return _this.props.character.stats.str; } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Dex:"),
                    react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.statsStyle, value: stats.dex + "", onChangeText: function () { return _this.props.character.stats.dex; } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Con:"),
                    react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.statsStyle, value: stats.con + "", onChangeText: function () { return _this.props.character.stats.con; } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Int:"),
                    react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.statsStyle, value: stats.int + "", onChangeText: function () { return _this.props.character.stats.int; } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Wis:"),
                    react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.statsStyle, value: stats.wis + " ", onChangeText: function () { return _this.props.character.stats.wis; } })),
                react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                    react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle }, "Chr:"),
                    react_1.default.createElement(react_native_1.TextInput, { style: exports.styles.statsStyle, value: stats.cha + "", onChangeText: function () { return _this.props.character.stats.cha; } })))));
    };
    CharacterEdit.prototype.fabButton = function () {
        var _this = this;
        var actions = [
            {
                text: exports.FabConfig.edit.text,
                position: exports.FabConfig.edit.position,
                name: exports.FabConfig.edit.name
            }, {
                text: exports.FabConfig.upload.text,
                position: exports.FabConfig.upload.position,
                name: exports.FabConfig.upload.name
            }
        ];
        return (react_1.default.createElement(react_native_floating_action_1.FloatingAction, { actions: actions, onPressItem: function (name) {
                if (exports.FabConfig.edit.name.localeCompare(name + "") == 0) {
                    _this.edit();
                }
                else {
                    _this.upload();
                }
            } }));
    };
    CharacterEdit.prototype.edit = function () {
        react_native_router_flux_1.Actions.push('characterEdit', {
            character: this.props.character,
            updateCharacter: this.props.updateCharacter,
            index: this.props.index,
            title: this.props.character.name
        });
    };
    CharacterEdit.prototype.upload = function () {
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
    edit: {
        text: "Edit",
        name: "edit",
        position: 1
    },
    upload: {
        text: "Upload",
        name: "upload",
        position: 1
    }
};

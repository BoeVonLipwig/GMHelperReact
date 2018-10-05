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
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Character.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.Text, null, this.props.character.name),
            react_1.default.createElement(react_native_1.Text, null, this.props.character.name),
            react_1.default.createElement(react_native_1.Text, null, this.props.character.name),
            react_1.default.createElement(react_native_1.Text, null, this.props.character.name),
            this.fabButton()));
    };
    Character.prototype.fabButton = function () {
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
    Character.prototype.edit = function () {
        react_native_router_flux_1.Actions.push('characterEdit', {
            character: this.props.character,
            updateCharacter: this.props.updateCharacter,
            index: this.props.index
        });
    };
    Character.prototype.upload = function () {
    };
    return Character;
}(react_2.Component));
exports.Character = Character;
exports.styles = react_native_1.StyleSheet.create({
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

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
var NPCs = /** @class */ (function (_super) {
    __extends(NPCs, _super);
    function NPCs(props) {
        return _super.call(this, props) || this;
    }
    NPCs.prototype.addChar = function () {
    };
    NPCs.prototype.fabButton = function () {
        var _this = this;
        var actions = [{
                text: exports.FabConfig.add.text,
                position: exports.FabConfig.add.position,
                name: exports.FabConfig.add.name,
            }];
        return (react_1.default.createElement(react_native_floating_action_1.FloatingAction, { actions: actions, overrideWithAction: true, onPressItem: function (name) {
                if (exports.FabConfig.add.name.localeCompare(name + "") == 0) {
                    _this.addChar();
                }
            } }));
    };
    NPCs.prototype.gotoCharacter = function (npc, i) {
    };
    NPCs.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            this.props.npcs.map(function (npcs, i) {
                return react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return _this.gotoCharacter(npcs, i); }, style: exports.styles.listItem, key: i },
                    react_1.default.createElement(react_native_1.Text, null, npcs.name));
            }),
            this.fabButton()));
    };
    return NPCs;
}(react_2.Component));
exports.NPCs = NPCs;
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
    add: {
        text: "Add",
        name: "add",
        position: 1,
    }
};

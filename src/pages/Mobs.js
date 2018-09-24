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
var react_native_1 = require("react-native");
var react_native_floating_action_1 = require("react-native-floating-action");
var Mobs = /** @class */ (function (_super) {
    __extends(Mobs, _super);
    function Mobs(props) {
        return _super.call(this, props) || this;
    }
    Mobs.prototype.addChar = function () {
    };
    Mobs.prototype.fabButton = function () {
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
    Mobs.prototype.gotoCharacter = function (mobs, i) {
    };
    Mobs.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            this.props.mobs.map(function (mob, i) {
                return react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return _this.gotoCharacter(mob, i); }, style: exports.styles.listItem, key: i },
                    react_1.default.createElement(react_native_1.Text, null, mob.race));
            }),
            this.fabButton()));
    };
    return Mobs;
}(react_1.default.Component));
exports.Mobs = Mobs;
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

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
var Players = /** @class */ (function (_super) {
    __extends(Players, _super);
    function Players() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Players.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.Text, null, "hi"),
            this.fabButton()));
    };
    Players.prototype.fabButton = function () {
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
    Players.prototype.addChar = function () {
    };
    return Players;
}(react_1.default.Component));
exports.Players = Players;
exports.FabConfig = {
    add: {
        text: "Add",
        name: "add",
        position: 1,
    }
};

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
var Players = /** @class */ (function (_super) {
    __extends(Players, _super);
    function Players(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            players: []
        };
        return _this;
    }
    Players.prototype.componentDidMount = function () {
        var char = { name: "Aarok", race: "Human", class: "Warlock", id: 1 };
        var pl = this.state.players.concat(char);
        this.setState({ players: pl });
    };
    Players.prototype.addChar = function () {
    };
    Players.prototype.updateChar = function (char) {
    };
    Players.prototype.render = function () {
        var _this = this;
        console.log("asd");
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            this.state.players.map(function (player, i) {
                return react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return react_native_router_flux_1.Actions.push('character', { character: player, updateChar: _this.updateChar.bind(_this) }); }, style: exports.styles.listItem, key: i },
                    react_1.default.createElement(react_native_1.Text, null, player.name + " the " + player.race + " " + player.class));
            }),
            this.fabButton()));
    };
    Players.prototype.download = function () {
    };
    Players.prototype.fabButton = function () {
        var _this = this;
        var actions = [
            {
                text: exports.FabConfig.add.text,
                position: exports.FabConfig.add.position,
                name: exports.FabConfig.add.name
            }, {
                text: exports.FabConfig.download.text,
                position: exports.FabConfig.download.position,
                name: exports.FabConfig.download.name
            }
        ];
        return (react_1.default.createElement(react_native_floating_action_1.FloatingAction, { actions: actions, onPressItem: function (name) {
                if (exports.FabConfig.add.name.localeCompare(name + "") == 0) {
                    _this.addChar();
                }
                else {
                    _this.download();
                }
            } }));
    };
    return Players;
}(react_2.Component));
exports.Players = Players;
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
        position: 1
    },
    download: {
        text: "Download",
        name: "download",
        position: 1
    }
};

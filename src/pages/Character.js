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
    function Character(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            update: 0
        };
        return _this;
    }
    Character.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            this.info(),
            this.displayHealth(),
            this.printStats(),
            this.fabButton()));
    };
    Character.prototype.info = function () {
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle },
                "Race: ",
                this.props.character.race),
            react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle },
                "Class: ",
                this.props.character.class),
            react_1.default.createElement(react_native_1.Text, { style: exports.styles.textStyle },
                "AC: ",
                this.props.character.armorClass)));
    };
    Character.prototype.displayHealth = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row', paddingLeft: 10 } },
            react_1.default.createElement(react_native_1.Text, { style: {
                    fontSize: 20,
                    paddingRight: 10,
                } }, "Hit points:"),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: exports.styles.buttonStyleLower, onPress: function () { return _this.charHealth(-1); } },
                react_1.default.createElement(react_native_1.Text, null, " - ")),
            react_1.default.createElement(react_native_1.Text, { style: {
                    fontSize: 20,
                    paddingRight: 10,
                    paddingLeft: 10
                } },
                this.props.character.curHitPoints,
                "/",
                this.props.character.maxHitPoints),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: exports.styles.buttonStyleAdd, onPress: function () { return _this.charHealth(1); } },
                react_1.default.createElement(react_native_1.Text, null, " + "))));
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
        return (react_1.default.createElement(react_native_1.View, { style: { paddingLeft: 10 } },
            react_1.default.createElement(react_native_1.Text, { style: { fontSize: 20, paddingTop: 10 } }, "Stats:"),
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle },
                    "Str: ",
                    stats.str),
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle },
                    "Dex: ",
                    stats.dex),
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle },
                    "Con: ",
                    stats.con),
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle },
                    "Int: ",
                    stats.int),
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle },
                    "Wis: ",
                    stats.wis),
                react_1.default.createElement(react_native_1.Text, { style: exports.styles.statsStyle },
                    "Chr: ",
                    stats.cha))));
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
            index: this.props.index,
            updateChar: this.updateChar.bind(this),
            title: this.props.character.name
        });
    };
    Character.prototype.upload = function () {
    };
    Character.prototype.updateChar = function (char) {
        this.setState({ update: this.state.update + 1 });
    };
    return Character;
}(react_2.Component));
exports.Character = Character;
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
        fontSize: 15,
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

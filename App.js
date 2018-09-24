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
var react_native_router_flux_1 = require("react-native-router-flux");
var Players_1 = require("./src/pages/Players");
var NPCs_1 = require("./src/pages/NPCs");
var Mobs_1 = require("./src/pages/Mobs");
// @ts-ignore
var TabIcon = function (_a) {
    var title = _a.title;
    return (react_1.default.createElement(react_native_1.Text, null, title));
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            players: [],
            npcs: [],
            mobs: []
            // firebase things?
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        // firebase things?
        var char = { name: "Aarok", race: "Human", class: "Warlock" };
        var pl = this.state.players.concat(char);
        var npc = { name: "Test NPC", race: "Human", class: "Warlock" };
        var np = this.state.npcs.concat(npc);
        var mob = { name: "Aarok", race: "Gnoll", class: "Warlock" };
        var mb = this.state.mobs.concat(mob);
        this.setState({ players: pl, mobs: mb, npcs: np });
    };
    App.prototype.render = function () {
        return (react_1.default.createElement(react_native_router_flux_1.Router, null,
            react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'root', tabs: true, hideNavBar: true },
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab1', title: 'Players', component: Players_1.Players, players: this.state.players, icon: TabIcon, initial: true, updateShit: this.updatePlayers.bind(this) }),
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab2', title: 'NPCs', component: NPCs_1.NPCs, npcs: this.state.npcs, icon: TabIcon, updateShit: this.updateNPCs.bind(this) }),
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab3', title: 'Mobs', component: Mobs_1.Mobs, mobs: this.state.mobs, icon: TabIcon, updateShit: this.updateMobs.bind(this) }))));
    };
    App.prototype.updatePlayers = function (players) {
        this.setState({ players: players });
    };
    App.prototype.updateNPCs = function (npcs) {
        this.setState({ npcs: npcs });
    };
    App.prototype.updateMobs = function (mobs) {
        this.setState({ mobs: mobs });
    };
    return App;
}(react_1.default.Component));
exports.default = App;

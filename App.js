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
var react_native_router_flux_1 = require("react-native-router-flux");
var Players_1 = require("./src/pages/Players");
var NPCs_1 = require("./src/pages/NPCs");
var Mobs_1 = require("./src/pages/Mobs");
var Character_1 = require("./src/pages/Character");
var CharacterEdit_1 = require("./src/pages/CharacterEdit");
// @ts-ignore
var TabIcon = function (_a) {
    var title = _a.title;
    return (react_1.default.createElement(react_native_1.Text, null, title));
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(react_native_router_flux_1.Router, null,
            react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'root' },
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tabs', tabs: true, hideNavBar: true },
                    react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab1', title: 'Players', component: Players_1.Players, icon: TabIcon, initial: true }),
                    react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab2', title: 'NPCs', component: NPCs_1.NPCs, icon: TabIcon }),
                    react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab3', title: 'Mobs', component: Mobs_1.Mobs, icon: TabIcon })),
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'character', component: Character_1.Character }),
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'characterEdit', component: CharacterEdit_1.CharacterEdit }))));
    };
    return App;
}(react_2.Component));
exports.default = App;

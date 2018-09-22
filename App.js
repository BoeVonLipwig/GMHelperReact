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
var Characters_1 = require("./src/pages/Characters");
var Maps_1 = require("./src/pages/Maps");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
        // firebase things?
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        // firebase things?
    };
    App.prototype.render = function () {
        return (react_1.default.createElement(react_native_router_flux_1.Router, null,
            react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'root', tabs: true },
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab1', title: 'Players', component: Characters_1.Characters, icon: TabIcon }),
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab2', title: 'NPCs', component: Characters_1.Characters, icon: TabIcon }),
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab3', title: 'Mobs', component: Characters_1.Characters, icon: TabIcon }),
                react_1.default.createElement(react_native_router_flux_1.Scene, { key: 'tab4', title: 'Maps', component: Maps_1.Maps, icon: TabIcon }))));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
var TabIcon = /** @class */ (function (_super) {
    __extends(TabIcon, _super);
    function TabIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabIcon.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: { width: '100%', height: '100%', justifyContent: 'center' } },
            react_1.default.createElement(react_native_1.Text, { style: {
                    textAlign: 'center',
                    fontSize: 20
                } }, this.props.name)));
    };
    return TabIcon;
}(react_1.default.Component));

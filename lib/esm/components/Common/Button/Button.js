import React from "react";
import cs from "classnames";
export var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick, icon = _a.icon, outline = _a.outline, primary = _a.primary, onlyIcon = _a.onlyIcon, transparent = _a.transparent;
    return (React.createElement("button", { className: cs('btnButton', { 'btnOutline': outline }, { 'btnTransparent': transparent }, { 'btnPrimary': primary }, { 'btnIcon': onlyIcon }), onClick: onClick },
        React.createElement(React.Fragment, null,
            icon,
            text)));
};

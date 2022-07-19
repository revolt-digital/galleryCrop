import React from "react";
import { Button } from "../Button/Button";
import CloseIcon from "@mui/icons-material/Close";
export var Card = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, body = _a.body, preBottom = _a.preBottom, bottom = _a.bottom, close = _a.close;
    return (React.createElement("div", { className: 'cContainer' },
        React.createElement("div", { className: 'cGalleryWrapper' },
            React.createElement("div", { className: 'cHeader' },
                React.createElement("h3", { className: 'cTitle' }, title),
                close && React.createElement(Button, { onlyIcon: true, icon: React.createElement(CloseIcon, null), onClick: close })),
            React.createElement("div", { className: 'cBody' },
                React.createElement("h4", { className: 'cSubtitle' }, subtitle),
                React.createElement("div", { className: 'cGalleryList' }, body)),
            React.createElement("div", null, preBottom),
            React.createElement("div", { className: 'cButtonsContainer' }, bottom))));
};

import React from "react";
import classNames from "classnames";
var Spinner = function (_a) {
    var solid = _a.solid;
    return (React.createElement("span", { className: classNames("loader", {
            "loader-solid": solid
        }) }));
};
export default Spinner;

import React from "react";
var InputRange = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (React.createElement("input", { type: "range", value: value, min: 1, max: 3, step: 0.1, onChange: function (e) { return onChange(+e.target.value); } }));
};
export default InputRange;

import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
var UploadButton = function () {
    var onChange = function (e) {
        console.log(e.target.files[0]);
    };
    return (React.createElement("div", { className: 'ubContainer' },
        React.createElement("input", { onChange: onChange, type: "file", id: "file", style: { display: "none" } }),
        React.createElement("label", { htmlFor: "file" },
            React.createElement("span", null,
                React.createElement(AddPhotoAlternateIcon, null),
                "UPLOAD IMAGE"))));
};
export default UploadButton;

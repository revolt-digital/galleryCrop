export var Methods;
(function (Methods) {
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
    Methods["PUT"] = "PUT";
})(Methods || (Methods = {}));
export var Endpoint;
(function (Endpoint) {
    Endpoint["GET_IMAGES"] = "/decks/images/";
    Endpoint["UPLOAD_IMAGE"] = "/decks/image/upload_url";
    Endpoint["DELETE_IMAGE"] = "/decks/images/delete";
    Endpoint["SAVE_IMAGE"] = "/decks/image/save";
})(Endpoint || (Endpoint = {}));

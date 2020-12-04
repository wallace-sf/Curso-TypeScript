"use strict";
var Geometry;
(function (Geometry) {
    let Area;
    (function (Area) {
        function getRectangle(base, height) {
            return base * height;
        }
        Area.getRectangle = getRectangle;
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
//# sourceMappingURL=geometryRect.js.map
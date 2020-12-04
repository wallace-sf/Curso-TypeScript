"use strict";
var Geometry;
(function (Geometry) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function getCircunference(radius) {
            return PI * Math.pow(radius, 2);
        }
        Area.getCircunference = getCircunference;
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
//# sourceMappingURL=geometryCirc.js.map
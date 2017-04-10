/// <reference path="../typings/globals/jquery/index.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Interaccion = (function () {
    function Interaccion() {
        $('#btnOK').click(function () {
            console.log('Se hizo click');
            $(this).css('color', 'red');
        });
    }
    return Interaccion;
}());
new Interaccion();
//# sourceMappingURL=main.js.map